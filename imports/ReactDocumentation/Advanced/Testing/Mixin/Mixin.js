import ViewModel from 'viewmodel-react';

ViewModel.mixin({
  user: {
    logged: false,
    username: ViewModel.property.string.notBlank
  }
});