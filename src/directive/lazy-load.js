import LazyLoader from '@/util/post-img-lazy-loader'

const lazyLoadDirective = {
  bind (el, binding, vnode) {
    vnode.$lazyLoader = new LazyLoader(el);
  },
  update (el, binding, vnode) {
    vnode.$lazyLoader.reset();
  },
  unbind (el, binding, vnode) {
    vnode.$lazyLoader.destory();
    vnode.$lazyLoader = null;
  }
}

export {
  lazyLoadDirective
}