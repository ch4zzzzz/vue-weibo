import LazyLoader from '@/util/post-img-lazy-loader'
let lazyLoader;

const lazyLoadDirective = {
  bind (el, binding, vnode) {
    lazyLoader = new LazyLoader(el);
  },
  update (el, binding, vnode) {
    // lazyLoader ? 1 : lazyLoader = new LazyLoader(el);
  },
  unbind (el, binding, vnode) {
    lazyLoader.destory();
    lazyLoader = null;
  }
}

export {
  lazyLoadDirective
}