import LazyLoader from '@/util/post-img-lazy-loader'
let lazyLoader;

const lazyLoadDirective = {
  bind (el, binding, vnode) {
    lazyLoader = new LazyLoader(el);
  },
  update (el, binding, vnode) {

  },
  unbind (el, binding, vnode) {
    lazyLoader.destory();
  }
}

export {
  lazyLoadDirective
}