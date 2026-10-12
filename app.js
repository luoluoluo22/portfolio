// 罗名扬作品集交互脚本
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initProjectFilter();
  initCopyButtons();
  initScrollSpy();
  initEscapeKey();
  initTimelineToggle();
});

// 1. 深色 / 浅色模式切换
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
      showToast('已切换为明亮模式');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('portfolio-theme', 'dark');
      showToast('已切换为极客深色模式');
    }
  });
}

// 2. 手机端汉堡菜单
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // 点击链接后自动关闭
  const links = navMenu.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// 3. 项目分类筛选
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. 一键复制
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`已成功复制: ${textToCopy}`);
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    });
  });
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(`已成功复制: ${text}`);
  } catch (err) {
    showToast(`请手动复制: ${text}`);
  }
  document.body.removeChild(textarea);
}

// 5. Toast 提示通知
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  if (window.toastTimer) {
    clearTimeout(window.toastTimer);
  }

  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// 6. 图片 Lightbox 弹窗控制
window.openLightbox = function(imageSrc, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');

  if (!modal || !img) return;

  img.src = imageSrc;
  captionEl.textContent = caption || '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function(event) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  // 如果点击的是内容图片本身，不关闭；点击背景、关闭按钮或文字则关闭
  if (event && event.target && event.target.id === 'lightboxImg') {
    return;
  }

  modal.classList.remove('active');
  document.body.style.overflow = '';
};

// 7. 按 ESC 键退出 Lightbox
function initEscapeKey() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('lightboxModal');
      if (modal && modal.classList.contains('active')) {
        closeLightbox();
      }
    }
  });
}

// 8. 导航栏随滚动高亮当前分区 (ScrollSpy)
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// 9. 履历折叠与展开控制
function initTimelineToggle() {
  const toggleBtn = document.getElementById('toggleExpBtn');
  const collapseWrap = document.getElementById('timelineOlderWrap');
  if (!toggleBtn || !collapseWrap) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = collapseWrap.classList.contains('is-open');
    if (isOpen) {
      collapseWrap.classList.remove('is-open');
      toggleBtn.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const textSpan = toggleBtn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = '展开更早的 5 年商业视觉设计与求学经历';
    } else {
      collapseWrap.classList.add('is-open');
      toggleBtn.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      const textSpan = toggleBtn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = '收起更早经历';
    }
  });
}
