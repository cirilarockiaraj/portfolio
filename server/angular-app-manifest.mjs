
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/home",
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/project"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5267, hash: 'f9a7320b138ef5835605c1336f28c3aa01192b6f3a419c82f4ec1ab5cb979588', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1096, hash: 'c6eecb78bcbe76dc7da64b34a2f360e1aca7da33ec5b4031b94f7455b4e06ce2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 39558, hash: 'da6358f06b6f90581835845e8d8d26759224670552fb6fe4b7ca46fb1b545244', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40481, hash: 'e0fbe39a84d726688a1fa45225f1fd69117d9d76f52cb6d8355af5ab57cbe37c', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 37784, hash: 'a2e42ac25f56947ee31147bbb51123e1abd64692e791849e0b768377616f6a48', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 41649, hash: '1c1110e063527f3bbeb201a44c91296b388efb8b31d64b8b327217a7a47a0a48', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 74570, hash: '11b902f6b827cc424ab509a7f178a789ff179cf9946ad152010ea27f3ca05e76', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 81857, hash: '55c416f50fc339f1372f22afb426d8628cad2c79c6031f9ac0b03e7fd60704ce', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-4QYUZORA.css': {size: 244518, hash: 'chwMWHNhfMA', text: () => import('./assets-chunks/styles-4QYUZORA_css.mjs').then(m => m.default)}
  },
};
