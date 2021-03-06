// value格式为{requiredAuthority, currentAuthority}
const authority = {
  bind: function(el, binding, vnode) {
    const {requiredAuthority, currentAuthority, callback} = binding.value;
    if (requiredAuthority > currentAuthority) {
      el.addEventListener('touchstart', callback, {capture: true});
    }
  },
  update: function(el, binding, vnode) {
    const {requiredAuthority, currentAuthority, callback} = binding.value;
    if (requiredAuthority > currentAuthority) {
      el.addEventListener('touchstart', callback, {capture: true});
    } else {
      el.removeEventListener('touchstart', callback, {capture: true});
    }
  },
  unbind: function(el, binding, vnode) {
    const {callback} = binding.value;
    el.removeEventListener('touchstart', callback, {capture: true});
  },
}

export {
  authority
}