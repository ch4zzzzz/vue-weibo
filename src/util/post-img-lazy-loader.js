class HTML5LazyLoader {
  i = 0;
  element = null;
  current = null;
  intersectionObserver = null;

  constructor (element) {
    this.init(element);
  }

  init (element) {
    this.i = 0;
    this.element = element;
    const intersectionObserver = this.intersectionObserver = new IntersectionObserver(items => {
      if (items[0] <= 0) {
        return;
      }
      const post = items[0].target;
      this.load(post);
      this.setObserver()
    })
    let i = this.i;
    this.setObserver = this.setObserver.bind(this);
    setTimeout(() => {
      this.setObserver()
    }, 500)    
  }

  setObserver () {
    if (this.current) {
      this.intersectionObserver.unobserve(this.current);
    }
    const element = this.element;
    const posts = element.querySelectorAll('.post');
    if (!posts) {
      return;
    }
    const len = posts.length;
    if (this.i >= len) {
      return;
    }
    const current = this.current = posts[this.i++];
    this.intersectionObserver.observe(current);
  }

  load (post) {
    const imgs = post.querySelectorAll('.lazy-load-img');
    for (let i=0, len=imgs.length; i<len; i++) {
      const img = imgs[i];
      const src = img.getAttribute('data-src');
      if (src === img.getAttribute('src')) {
        return;
      }
      img.setAttribute('src', src);
    }
  }

  destory () {
    if (this.current) {
      this.intersectionObserver.unobserve(this.current);
      this.intersectionObserver = null;
      this.element = null;
    }
  }
}

class StandardLazyLoader {
  i = 0;
  ticking = false;
  element = null;

  constructor (element) {
    this.init(element);
  }

  init (element) {
    this.i = 0;
    this.current = null;
    this.ticking = false;
    this.element = element;
    this.elementLazyLoader = this.elementLazyLoader.bind(this);
    window.addEventListener('scroll', this.elementLazyLoader, false);
    window.setTimeout(() => {
      this.elementLazyLoader();
    }, 500)
  }

  elementLazyLoader () {
    const element = this.element;
    if (this.ticking) {
      return;
    }
    const that = this;
    that.lazyLoader(element);
    setTimeout(() => {
      that.ticking = false;
    }, 2000)
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
      if (src === img.getAttribute('src')) {
        return;
      }
      img.setAttribute('src', src);
    }
  }
  
  destory () {
    window.removeEventListener('scroll', this.elementLazyLoader, false);
    this.element = null;
  }
}

let LazyLoader = null;

if (window.IntersectionObserver) {
  LazyLoader = HTML5LazyLoader 
} else {
  LazyLoader = StandardLazyLoader;
}


export default LazyLoader;