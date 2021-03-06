import store from "./store";

const initialWindowSize = {
  height: 0,
  width: 10000
};
if (typeof window != "undefined") {
  let first = true;
  ViewModel.signal({
    window: {
      windowSize: {
        target: window,
        event: "resize",
        transform: function(event) {
          if (first) {
            first = false;
            return initialWindowSize;
          }
          return {
            height: window.innerHeight,
            width: window.innerWidth
          };
        }
      }
    }
  });
}

let scrollWidth;
const reloadKey = "vm-reloaded-";

ViewModelExplorer({
  signal: "window",
  windowSize: initialWindowSize,
  saveLastState() {
    this.deleteStateAndStore(reloadKey, false);
    this.saveStateToStore(reloadKey);
  },
  loadLastState(){
    if (store.has(reloadKey)) {
      this.loadStateFromStore(reloadKey); 
      this.deleteStateAndStore(reloadKey, false);
    }
  },
  created() {
    if (typeof window != "undefined") {
      const that = this;
      setTimeout(() => {
        that.windowSize({
          height: window.innerHeight,
          width: window.innerWidth
        });
        store.forEach((key, val) => {
          if (key != reloadKey) {
            that.savedStates().push({ name: key, components: val });
          }
        });
      });
    }
  },
  topMargin: 45,
  bottomMargin: 45,
  show: false,
  panelHeight() {
    return this.windowSize().height - this.topMargin() - this.bottomMargin();
  },
  panelWidth: 340,
  collapsedLeft() {
    return this.hoveringIcon() ? 40 : 35;
  },
  panelStyle() {
    return {
      position: "fixed",
      height: this.show() ? this.panelHeight() : 25,
      width: this.panelWidth(),
      top: this.topMargin(),
      "z-index": 99999,
      "background-color": "#ccc",
      border: "1px solid #555",
      left:
        this.windowSize().width -
        (this.show() ? this.panelWidth() : this.collapsedLeft()) -
        this.scrollbarWidth(),
      "overflow-x": "auto",
      "overflow-y": "visible",
      "border-radius": "1em 0 0 1em",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      "-ms-transition": "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      opacity: this.show() || this.hoveringIcon() ? 1 : 0.4
    };
  },
  scrollbarWidth() {
    if (typeof document == "undefined") return 0;
    var body = document.body,
      html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    if (height <= window.innerHeight) return 0;
    if (scrollWidth) return scrollWidth;

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    scrollWidth = widthNoScroll - widthWithScroll;
    return scrollWidth;
  },
  hoveringIcon: false,
  components() {
    if (!ViewModel.rootComponents) {
      ViewModel.prepareRoot();
    }
    return ViewModel.rootComponents.list();
  },
  selectedState: null,
  savedStates: [ ],
  addComponentForSave(allComponents, component) {
    if (component.vmComponentName === "ViewModelExplorer") return;
    const data = component.data();
    if (Object.keys(data).length > 0) {
      allComponents[ViewModel.getPathToRoot(component)] = data;
    }
    for (let child of component.children()) {
      this.addComponentForSave(allComponents, child);
    }
  },
  saveState() {
    const name = prompt("Name of the current state:");
    this.saveStateToStore(name);
    this.selectedState(name);
  },
  saveStateToStore(name) {
    const allComponents = {};
    for (let component of this.components()) {
      this.addComponentForSave(allComponents, component);
    }
    this.savedStates().push({ name: name, components: allComponents });
    store.set(name, allComponents);
  },
  loadComponentState(components, component) {
    if (component.vmComponentName === "ViewModelExplorer") return;

    ViewModel.Tracker.afterFlush(() => {
      const data = components[ViewModel.getPathToRoot(component)];
      if (data) {
        component.load(data);
      }

      for (let child of component.children()) {
        this.loadComponentState(components, child);
      }
    });
  },
  loadState() {
    let selectedState = this.selectedState();
    if (!selectedState && this.savedStates().length) {
      selectedState = this.savedStates()[0].name;
    }
    this.loadStateFromStore(selectedState);
  },
  loadStateFromStore(selectedState) {
    if (!selectedState) return;
    const that = this;
    const components = store.get(selectedState);
    if (components) {
      ViewModel.Tracker.nonreactive(function() {
        for (let component of that.components()) {
          that.loadComponentState(components, component);
        }
      });
    };
  },
  deleteState() {
    const selectedState = this.selectedState();
    this.deleteStateAndStore(selectedState, true);
  },
  deleteStateAndStore(selectedState, selectNext) {
    if (!selectedState) return;
    if (store.has(selectedState)) {
      store.remove(selectedState);
    }
    let index = -1;
    for (let state of this.savedStates()) {
      index++;
      if (state.name === selectedState) {
        this.savedStates().splice(index, 1);
        break;
      }
    }
    if (this.savedStates().length > 0) {
      if (selectNext) {
        this.selectedState(this.savedStates()[0].name);
      }
    } else {
      this.selectedState(null);
    }
  },
  selectedStateStyle() {
    return {
      width: 200 - this.scrollbarWidth(),
      backgroundImage:
        "url(https://viewmodel.org/images/explorer/dropdown_arrow.png)"
    };
  },
  render() {
    <div style="
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      line-height: 16px;
      ">
      <div b="style: panelStyle, hover: hoveringIcon">
        <div style="text-align: left">
          <img src="https://viewmodel.org/images/explorer/viewmodel-logo-small.png" style="
             max-height: 15px;
             margin-top: 3px;
             margin-left: 2px;
             cursor: pointer;
             vertical-align: top;
             " b="toggle: show" />
          <img src="https://viewmodel.org/images/explorer/add.png" style="margin-left: 10px; cursor: pointer; margin-top: 5px; cursor: pointer;" title="Save current state" b="click: saveState" />
          <select b="value: selectedState, style: selectedStateStyle, change: loadState" style="
                   -webkit-appearance: button;
                   -webkit-padding-end: 20px;
                   -webkit-padding-start: 2px;
                   -webkit-user-select: none;
                   border-radius: 4px;
                   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
                   background-position: right;
                   background-repeat: no-repeat;
                   border: 1px solid #AAA;
                   color: #555;
                   font-size: 12px;
                   overflow: hidden;
                   padding: 2px 5px;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                   margin-left: 10px;
                   margin-top: 4px;
                   vertical-align: top;
                   width: 185px;
                ">
            <option b="repeat: savedStates, key: name" value={repeatObject.name}>
              {repeatObject.name}
            </option>
          </select>
          <img src="https://viewmodel.org/images/explorer/reload.png" style="margin-left: 10px; cursor: pointer; margin-top: 5px; cursor: pointer;" title="Reload selected state" b="click: loadState" />
          <img src="https://viewmodel.org/images/explorer/remove.png" style="margin-left: 10px; cursor: pointer; margin-top: 5px; cursor: pointer;" title="Delete selected state" b="click: deleteState" />
        </div>

        {this.components().map(c => (
          <DisplayComponent key={c.vmId} viewmodel={c} />
        ))}
      </div>
    </div>;
  }
});
