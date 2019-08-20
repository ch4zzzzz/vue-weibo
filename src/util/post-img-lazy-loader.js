export default class LazyLoader {
  i = 0;
  elementLazyLoader = null;

  constructor (element) {
    this.init(element);
  }

  init (element) {
    this.i = 0;
    this.current = null;
    this.elementLazyLoader = this.lazyLoader.bind(this, element)
    window.addEventListener('scroll', this.elementLazyLoader, false);
    window.setTimeout(() => {
      this.elementLazyLoader();
    }, 500)
  }

  lazyLoader (element) {
    let i = this.i;
    const posts = element.querySelectorAll('.post');
    if (!posts) {
      return;
    }
    const len = posts.length;
    if (i >= len) {
      return;
    }
    const current = posts[i];
    const seeHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (current.offsetTop >= seeHeight + scrollTop) {
      return;
    }
    const limit = i+3;
    for (; i<len && i<limit; i++) {
      const post = posts[i];
      this.load(post);
    }
    this.i = i;
  }

  load (post) {
    const imgs = post.querySelectorAll('.lazy-load-img');
    for (let i=0, len=imgs.length; i<len; i++) {
      const img = imgs[i];
      const src = img.getAttribute('data-src');
      img.setAttribute('src', src);
    }
  }
  
  destory () {
    window.removeEventListener('scroll', this.elementLazyLoader, false);
  }
}