/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2dd2882c673af9d5a5f12687ffda819"
  },
  {
    "url": "assets/css/0.styles.f3aeaaeb.css",
    "revision": "ebc1084daee064f41330bbc030eec2e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.202d162c.js",
    "revision": "f004d6d7328a811b7013682ada48fe7b"
  },
  {
    "url": "assets/js/11.ce71482c.js",
    "revision": "d53a3f3d75252d74be350fedaea335a9"
  },
  {
    "url": "assets/js/12.ebab5440.js",
    "revision": "023ab0e7fd5d38df3357d59497ff1093"
  },
  {
    "url": "assets/js/13.6c76dfee.js",
    "revision": "f6ea1e6c0770353fe03cfba3ef0d9a6f"
  },
  {
    "url": "assets/js/14.4bd71ccf.js",
    "revision": "b9ea2d92131ef23ef104c85c909c564c"
  },
  {
    "url": "assets/js/15.ad2dc00e.js",
    "revision": "6038b3b6e51964d6b1faf75ee5ab94ee"
  },
  {
    "url": "assets/js/16.ef4769ff.js",
    "revision": "2145574f3b0542373904a4e22494cb4e"
  },
  {
    "url": "assets/js/17.f5ff6aa2.js",
    "revision": "01feaeeb7db6fb50e63ff3ef0220928f"
  },
  {
    "url": "assets/js/18.0be2fc3e.js",
    "revision": "21d7ab92a8237f4f67ab0e4a1f7b36c0"
  },
  {
    "url": "assets/js/19.917d9134.js",
    "revision": "90f834f5d52e1b33906d3d248c53c616"
  },
  {
    "url": "assets/js/20.c2edfb87.js",
    "revision": "8c3d604a03aed6467dbc33fd6dcfea3c"
  },
  {
    "url": "assets/js/21.c2d89163.js",
    "revision": "fee197d5b36f61c818eec4c370625dde"
  },
  {
    "url": "assets/js/22.9d81b6c4.js",
    "revision": "c4a6a70b29e325abfa9c7c109c4e7314"
  },
  {
    "url": "assets/js/23.2a46f3e4.js",
    "revision": "134a2673bee079a4104eaa32c0c1dd12"
  },
  {
    "url": "assets/js/24.470788f0.js",
    "revision": "8398286a5e475f607f83103c1a725efd"
  },
  {
    "url": "assets/js/25.c7b70a07.js",
    "revision": "cd7f919e6fa91add192e342595f4eada"
  },
  {
    "url": "assets/js/26.08b78896.js",
    "revision": "d524c3f88f3e15262b0d17ec1bc3267d"
  },
  {
    "url": "assets/js/27.136e5c1e.js",
    "revision": "5f92dbaf25698bb0bab5620d2c4d53b7"
  },
  {
    "url": "assets/js/28.2853c8b8.js",
    "revision": "d66159ec24c8ffae5bcdca7a27b4b363"
  },
  {
    "url": "assets/js/29.ff25750b.js",
    "revision": "e01b244ba9ca0c2500100bb377122af8"
  },
  {
    "url": "assets/js/30.118d5e61.js",
    "revision": "741dfc02c1b0fee913a36e1eaeda7884"
  },
  {
    "url": "assets/js/31.dcdc4386.js",
    "revision": "eff2f4c790716bdb7895f33fa5bc777c"
  },
  {
    "url": "assets/js/32.5fdb77a2.js",
    "revision": "c4a794ee50da12f3490f8694c8ff9d12"
  },
  {
    "url": "assets/js/33.e37f3b33.js",
    "revision": "bf49e8ed170db5adda91fc402879fbab"
  },
  {
    "url": "assets/js/34.6e843075.js",
    "revision": "d270cafdfcc660a64e78295756ceda68"
  },
  {
    "url": "assets/js/35.c9f675d1.js",
    "revision": "08f46cc2c59271914413759dfc17d627"
  },
  {
    "url": "assets/js/36.8893550a.js",
    "revision": "c6318b3e59e25bc38c63449ce1b1699f"
  },
  {
    "url": "assets/js/37.d9760b9b.js",
    "revision": "02dc59ba07ba8a252f3018f9e4b22bf1"
  },
  {
    "url": "assets/js/38.45f6a28a.js",
    "revision": "d9b8db0c5c8ce62f372440ccd7bbefb4"
  },
  {
    "url": "assets/js/4.f9334130.js",
    "revision": "12cc72db3c2dbd3948d62baa3f6043e1"
  },
  {
    "url": "assets/js/5.41d66565.js",
    "revision": "c7c3ee40f751a1063d73911e3684f1a1"
  },
  {
    "url": "assets/js/6.b340f4c5.js",
    "revision": "9ae3c44aa2ddd901d38a670abb011a71"
  },
  {
    "url": "assets/js/7.5bb5dbbb.js",
    "revision": "f17e8739fcab79cabcf6bba90c6247de"
  },
  {
    "url": "assets/js/8.cb1c7502.js",
    "revision": "6c9f1f5071f5136f7f32ec9ee0083d04"
  },
  {
    "url": "assets/js/9.9703c25f.js",
    "revision": "0da43e1ebc88d89b154980c3dfded247"
  },
  {
    "url": "assets/js/app.e62d7171.js",
    "revision": "e8aba93687181b9c1b5bbb3e4ed31c37"
  },
  {
    "url": "assets/js/vendors~flowchart.6e42d0bd.js",
    "revision": "51de5c4ba58177148749a92004867ac2"
  },
  {
    "url": "assets/js/vendors~notification.ecb92178.js",
    "revision": "6fa917f78f32e3b33fb173fbda9afec4"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "cc6931c4373d873d0348307a16d21bb5"
  },
  {
    "url": "javaee/index.html",
    "revision": "ffdd21dffe58c6708c99b181ebae3468"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "c52348af6e65debde9368b6896a90f7e"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "2da784310ac97e950ec4722caa95742b"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "5e7e261881aba5db855ff408e7b8843b"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "cfd07453288271067c56fa8d2399bc83"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "fbd0274bb3138e0eed9958fb2b8e7a47"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "828a8d756b06c783c03e32b59ba42ae4"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "cf665b95d1a289d91ca2b8c88c73eaff"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "32ce065b039d2c138ba833dd7f4fca69"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "e816d1d64571e5ba3474072e0361f04d"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "c5f77b10dd4c74a1db8518254b6f4423"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "54d0da2ae26c0fa58dc0ef07be046799"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "d7b51778146865abdd1597023a12a0cc"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "1b56da1927afe46c3502602c46ff35cf"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "2249693f056a4f77ca33a1f369932aa9"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "f3aae57f06df7665c39dd4887509b8d4"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "a6a3a3c5b8868837425b0887b80ef625"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "29876a023ff1e4f21c136601dfa7218a"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "a631174e4d39410e1b5551035d75ea46"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "de9f28c25240bda3356694207834aada"
  },
  {
    "url": "javatool/index.html",
    "revision": "b255928cfac4af719f63dbadbec2341c"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "355957d28f1b7fea298849509ab5cd4e"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "3481446783bb7a6ee57ae8887ce48191"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "06b5ce3c5fbc252645f033467e9b43c2"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "757ded88a22e394b67e80df5e4bce98d"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "acf1a2ad3faae2afac59749bdff26f13"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "ad7886e33dbee6fb8f4d5a0adc0d1ac5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
