/**
 * مطعم مذاق | Mazaq Restaurant
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Menu Data (قائمة الطعام التجريبية الفاخرة)
  // ==========================================================================
  const menuItems = [
    // --- مشويات فاخرة ---
    {
      id: 'grill-1',
      name: 'مشكل مذاق الملكي',
      category: 'grills',
      price: 390,
      desc: 'كباب لحم بلدي، كفتة مشوية على الفحم، شيش طاووق، وريش بتلو متبلة، تقدم مع أرز بسمتي وخضار مشوي وطحينة.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      badge: 'توقيع الشيف',
      badgeType: 'special'
    },
    {
      id: 'grill-2',
      name: 'ريش بتلو مدخنة على الفحم',
      category: 'grills',
      price: 430,
      desc: 'ريش لحم بتلو طازجة متبلة بالروزماري وزيت الزيتون البكر، مشوية على نار هادئة لنكهة تدخين عميقة وطرية.',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop',
      badge: 'الأعلى طلباً',
      badgeType: 'gold'
    },
    {
      id: 'grill-3',
      name: 'كباب وكفتة حاتي سوبر',
      category: 'grills',
      price: 295,
      desc: 'ميكس كباب بلدي مع كفتة مفرومة طازجة بالخلطة المصرية الأصيلة والتوابل المعتقة، مع خبز طازج وسلطة بلدي.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
      badge: 'كلاسيك مصري',
      badgeType: 'gold'
    },
    {
      id: 'grill-4',
      name: 'شيش طاووق على الفحم مع صوص الثومية',
      category: 'grills',
      price: 245,
      desc: 'أوراك وصدور دجاج طرية متبلة بالزبادي والزعتر والليمون، تقدم مع بطاطس مقلية وثومية بيتي فاخرة.',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'grill-5',
      name: 'ستيك ريب آي مدخن (350جم)',
      category: 'grills',
      price: 480,
      desc: 'قطعة ستيك ريب آي أنجوس رخامية مشوية بدرجة الاستواء حسب رغبتك، تقدم مع صوص المشروم والبيبر والفرايز.',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600&auto=format&fit=crop',
      badge: 'لحم أنجوس فاخر',
      badgeType: 'special'
    },
    {
      id: 'grill-6',
      name: 'طرب ضاني بلدي مشوي',
      category: 'grills',
      price: 310,
      desc: 'كفتة لحم بلدي متبلة ملفوفة بمنديل الضاني المقرمش المشوي على الجمر، طبق مصري أصيل غني بالعصارة.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=600&auto=format&fit=crop',
      badge: null
    },

    // --- برجر جورميه ---
    {
      id: 'burger-1',
      name: 'برجر مذاق سيجنتشر',
      category: 'burgers',
      price: 215,
      desc: 'شريحتان من لحم الأنجوس الطازج (200جم)، شيدر إنجليزية ذائبة، بصل مكرمل، بيكن بقري مقرمش، وصوص مذاق السري.',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop',
      badge: 'الأكثر مبيعاً 🔥',
      badgeType: 'spicy'
    },
    {
      id: 'burger-2',
      name: 'ترافل سموكي برجر',
      category: 'burgers',
      price: 240,
      desc: 'لحم بقري أنجوس، مايونيز الكمأة (الترافل) الإيطالي، مشروم سوتيه طازج، جبنة سويسرية، وخبز بريوش محمص بالزبدة.',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop',
      badge: 'نكهة جورميه',
      badgeType: 'special'
    },
    {
      id: 'burger-3',
      name: 'كرانشي تشيكن فاير',
      category: 'burgers',
      price: 185,
      desc: 'صدر دجاج مقرمش ذهبي متبل بخلطة التوابل الحارة، كول سلو منعش، هالبينو، صوص شيدر، ومايونيز بالثوم.',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=600&auto=format&fit=crop',
      badge: 'حار مقرمش 🌶️',
      badgeType: 'spicy'
    },
    {
      id: 'burger-4',
      name: 'دبل سماش كلاسيك شيدر',
      category: 'burgers',
      price: 195,
      desc: 'لحم أنجوس مفروم ومحمص بتقنية السماش على الصاج الساخن مع دبل جبنة شيدر أمريكية، خيار مخلل، وبصل مقطع ناعم.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
      badge: 'سماش كلاسيكي',
      badgeType: 'gold'
    },
    {
      id: 'burger-5',
      name: 'باربيكيو بيكون سموكر',
      category: 'burgers',
      price: 225,
      desc: 'شريحة لحم سميكة مع صوص باربيكيو مدخن، حلقات بصل مقرمشة، شرائح بيكون بقري، وجبنة جودا هولندية.',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop',
      badge: null
    },

    // --- ساندوتشات ووجبات ---
    {
      id: 'sand-1',
      name: 'ساندوتش فيلي تشيز ستيك فاخر',
      category: 'sandwiches',
      price: 210,
      desc: 'شرائح لحم ريب آي مشوية على الجريل مع بصل مكرمل وفلفل ألوان غارقة في جبنة البروفولون والشيدر في خبز باجيت.',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop',
      badge: 'مميز وجديد',
      badgeType: 'special'
    },
    {
      id: 'sand-2',
      name: 'سجق إسكندراني بلدي محمص',
      category: 'sandwiches',
      price: 165,
      desc: 'سجق بلدي شرقي متبل بالثوم والفلفل الحار وصوص الطماطم المسبكة مع رشة طحينة في عيش فينو سمسم مقرمش.',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
      badge: 'طعم بلدي',
      badgeType: 'gold'
    },
    {
      id: 'sand-3',
      name: 'رول شاورما لحم بلدي مدخن',
      category: 'sandwiches',
      price: 175,
      desc: 'شاورما لحم بقري مدخنة مع بقدونس وبصل وسماق وصوص طحينة بالليمون في خبز صاج مقرمش على الجريل.',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=600&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'sand-4',
      name: 'وجبة كريسبي ستربس مقرمشة (5 قطع)',
      category: 'sandwiches',
      price: 160,
      desc: 'أصابع دجاج كريسبي مقلية ذهبية مع بطاطس ودجز مبهرة، كول سلو، خبز بريوش طازج، وصوص العسل والخردل.',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop',
      badge: 'محبوب الأطفال',
      badgeType: 'gold'
    },

    // --- مقبلات وشوربة ---
    {
      id: 'app-1',
      name: 'بطاطس لودد فرايز بركانية',
      category: 'appetizers',
      price: 125,
      desc: 'بطاطس مقرمشة مغطاة بصوص جبنة الشيدر الساخن، هالبينو، بيكون بقري مقرمش، صوص الرانش وصوص الشيف الخاص.',
      image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop',
      badge: 'الأكثر مشاركة',
      badgeType: 'special'
    },
    {
      id: 'app-2',
      name: 'أصابع موتزاريلا مقلية مقرمشة',
      category: 'appetizers',
      price: 110,
      desc: '6 أصابع جبنة موتزاريلا إيطالية مقلية بقشرة مقرمشة محشوة بجبنة مطاطية غنية، تقدم مع صوص مارينارا دافئ.',
      image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?q=80&w=600&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'app-3',
      name: 'شوربة لسان عصفور بلحم الموزات',
      category: 'appetizers',
      price: 95,
      desc: 'شوربة لحم غنية ومكثفة مع قطع لحم موزة طرية ولسان عصفور محمر بمرق الأعشاب والليمون الطازج.',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop',
      badge: 'مقبلات شتوية',
      badgeType: 'gold'
    },
    {
      id: 'app-4',
      name: 'تشكيلة متبلات وسلطات مذاق',
      category: 'appetizers',
      price: 85,
      desc: 'طحينة سمسم بلدي، حمص بالكمون وزيت الزيتون، بابا غنوج مدخن على الفحم، وسلطة بلدي بالخل والليمون.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
      badge: null
    },

    // --- حلويات ومشروبات ---
    {
      id: 'des-1',
      name: 'أم علي ملكية بالقشطة والمكسرات',
      category: 'desserts',
      price: 115,
      desc: 'رقائق ميلفاي هشة مشبعة بالحليب المكثف والقشطة البلدية الفاخرة ومحمرة بالفرن مع فستق ولوز محمص.',
      image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=600&auto=format&fit=crop',
      badge: 'حلو مذاق المميز',
      badgeType: 'special'
    },
    {
      id: 'des-2',
      name: 'مولتن لافا كيك بلجيكية',
      category: 'desserts',
      price: 135,
      desc: 'كيك الشوكولاتة الساخنة تفيض بصوص الشوكولاتة البلجيكية الذائبة مع بولة آيس كريم فانيليا بوربون.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'des-3',
      name: 'ليمون نعناع فريش فرابيه',
      category: 'desserts',
      price: 55,
      desc: 'عصير ليمون طازج مخفوق مع أوراق النعناع الخضراء والثلج المجروش لمذاق فائق الانتعاش.',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
      badge: 'انتعاش صيفي',
      badgeType: 'gold'
    },
    {
      id: 'des-4',
      name: 'موهيتو توت وباشن فروت',
      category: 'desserts',
      price: 75,
      desc: 'مزيج فاخر من التوت الأزرق، بيوريه الباشن فروت، الصودا المنعشة، أوراق النعناع وشريحة ليمون.',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
      badge: null
    }
  ];

  // Offers Data (عروض التوفير والبوكسات)
  const offersData = {
    'offer-1': {
      id: 'offer-1',
      name: 'بوكس اللمة الملكي (4-5 أفراد)',
      price: 790,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop'
    },
    'offer-2': {
      id: 'offer-2',
      name: 'كومبو برجر ديو لشخصين',
      price: 430,
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop'
    },
    'offer-3': {
      id: 'offer-3',
      name: 'بوكس التوفير المقرمش',
      price: 320,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop'
    }
  };

  // State
  let currentCategory = 'all';
  let searchQuery = '';
  let cart = loadCartFromStorage();

  // DOM Elements
  const menuGrid = document.getElementById('menuGrid');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryTabs = document.getElementById('categoryTabs');
  const menuEmptyState = document.getElementById('menuEmptyState');
  const resetFilterBtn = document.getElementById('resetFilterBtn');

  // Cart DOM Elements
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const mobileBarCartBtn = document.getElementById('mobileBarCartBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawerBody = document.getElementById('cartDrawerBody');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const mobileBarCartBadge = document.getElementById('mobileBarCartBadge');
  const cartTotalItemsCount = document.getElementById('cartTotalItemsCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

  // Mobile Navigation Drawer Elements
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-action-btn');

  // Reservation Form & Modal Elements
  const reservationForm = document.getElementById('reservationForm');
  const reservationModal = document.getElementById('reservationModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const reservationTicket = document.getElementById('reservationTicket');
  const modalWhatsappConfirm = document.getElementById('modalWhatsappConfirm');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Sticky Navbar Scroll & Back to Top Toggle
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // Helper: Arabic Text Normalization (للبحث الذكي بدون أخطاء الهمزات)
  // ==========================================================================
  function normalizeArabic(text) {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .replace(/[\u064B-\u065F\u0670]/g, '') // إزالة التشكيل والحركات
      .replace(/[أإآٱ]/g, 'ا')              // توحيد الألف
      .replace(/ة/g, 'ه')                    // توحيد التاء المربوطة والهاء
      .replace(/ى/g, 'ي')                    // توحيد الألف المقصورة والياء
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ==========================================================================
  // 2. Menu Rendering & Filtering
  // ==========================================================================
  const fallbackDishImage = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop';

  function renderMenu() {
    const normSearch = normalizeArabic(searchQuery);

    const filtered = menuItems.filter(item => {
      const matchCat = currentCategory === 'all' || item.category === currentCategory;
      if (!matchCat) return false;
      if (!normSearch) return true;

      const normName = normalizeArabic(item.name);
      const normDesc = normalizeArabic(item.desc);
      return normName.includes(normSearch) || normDesc.includes(normSearch);
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = '';
      menuEmptyState.classList.remove('hidden');
      return;
    }

    menuEmptyState.classList.add('hidden');
    menuGrid.innerHTML = filtered.map(item => `
      <div class="menu-card" data-id="${item.id}">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy" onerror="this.onerror=null; this.src='${fallbackDishImage}';">
          ${item.badge ? `<span class="menu-card-badge ${item.badgeType === 'spicy' ? 'badge-spicy' : (item.badgeType === 'special' ? 'badge-special' : '')}">${item.badge}</span>` : ''}
        </div>
        <div class="menu-card-content">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-desc">${item.desc}</p>
          <div class="menu-card-footer">
            <div class="menu-card-price">
              ${item.price} <small>ج.م</small>
            </div>
            <button class="btn-add-item" data-add-id="${item.id}" title="أضف للطلب" aria-label="أضف ${item.name} للطلب">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach event listeners to all Add buttons
    menuGrid.querySelectorAll('.btn-add-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-add-id');
        const item = menuItems.find(m => m.id === id);
        if (item) {
          addToCart(item);
          showToast(`تمت إضافة «${item.name}» إلى سلة طلبك! 🛒`);
        }
      });
    });
  }

  // Category Tab Click
  categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;

    categoryTabs.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategory = btn.getAttribute('data-category');
    renderMenu();
  });

  // Search Input Handler
  menuSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    if (searchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderMenu();
  });

  // Clear Search
  clearSearchBtn.addEventListener('click', () => {
    menuSearchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    menuSearchInput.focus();
    renderMenu();
  });

  // Reset Filters from Empty State
  resetFilterBtn.addEventListener('click', () => {
    searchQuery = '';
    currentCategory = 'all';
    menuSearchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    categoryTabs.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });
    renderMenu();
  });

  // Global helper for footer links
  window.filterCategoryDirect = function(catKey) {
    currentCategory = catKey;
    searchQuery = '';
    menuSearchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    categoryTabs.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === catKey);
    });
    renderMenu();
  };

  // Special Offers Add-to-cart Buttons
  document.querySelectorAll('.add-offer-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const offerId = e.currentTarget.getAttribute('data-offer-id');
      const offer = offersData[offerId];
      if (offer) {
        addToCart(offer);
        showToast(`تمت إضافة «${offer.name}» إلى سلة طلبك! 🔥`);
        openCartDrawer();
      }
    });
  });

  // ==========================================================================
  // 3. Cart & Order Drawer System
  // ==========================================================================
  function loadCartFromStorage() {
    try {
      const saved = localStorage.getItem('mazaq_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem('mazaq_cart', JSON.stringify(cart));
    } catch {
      // storage quota or disabled
    }
  }

  function addToCart(item) {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      });
    }
    saveCartToStorage();
    updateCartUI();
  }

  function updateItemQuantity(id, delta) {
    const idx = cart.findIndex(c => c.id === id);
    if (idx !== -1) {
      cart[idx].quantity += delta;
      if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
      }
      saveCartToStorage();
      updateCartUI();
    }
  }

  function clearCart() {
    if (cart.length === 0) return;
    if (confirm('هل أنت متأكد من رغبتك في تفريغ سلة الطلبات؟')) {
      cart = [];
      saveCartToStorage();
      updateCartUI();
      showToast('تم تفريغ سلة الطلبات بنجاح');
    }
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const deliveryFee = totalCount > 0 ? 35 : 0;
    const grandTotal = subtotal + deliveryFee;

    // Badges
    cartBadgeCount.textContent = totalCount;
    mobileBarCartBadge.textContent = totalCount;
    cartTotalItemsCount.textContent = totalCount;

    // Trigger bounce animation on cart badges
    cartBadgeCount.classList.remove('bounce');
    void cartBadgeCount.offsetWidth; // Force reflow
    cartBadgeCount.classList.add('bounce');

    // Subtotals
    cartSubtotal.textContent = `${subtotal.toLocaleString('ar-EG')} ج.م`;
    cartGrandTotal.textContent = `${grandTotal.toLocaleString('ar-EG')} ج.م`;

    // Drawer Body
    if (cart.length === 0) {
      cartDrawerBody.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-cart-shopping"></i>
          <h4>سلة طلبك فارغة حالياً</h4>
          <p>تصفح منيو مذاق وأضف وجباتك المفضلة والمشروبات لنقوم بتوصيلها ساخنة إليك.</p>
        </div>
      `;
      whatsappCheckoutBtn.disabled = true;
      whatsappCheckoutBtn.style.opacity = '0.6';
      whatsappCheckoutBtn.style.cursor = 'not-allowed';
      clearCartBtn.style.display = 'none';
    } else {
      whatsappCheckoutBtn.disabled = false;
      whatsappCheckoutBtn.style.opacity = '1';
      whatsappCheckoutBtn.style.cursor = 'pointer';
      clearCartBtn.style.display = 'block';

      cartDrawerBody.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='${fallbackDishImage}';">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-price">${(item.price * item.quantity).toLocaleString('ar-EG')} ج.م</span>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-qty-action="dec" data-id="${item.id}" aria-label="تقليل الكمية">-</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" data-qty-action="inc" data-id="${item.id}" aria-label="زيادة الكمية">+</button>
          </div>
        </div>
      `).join('');

      // Quantity buttons listeners
      cartDrawerBody.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const action = e.currentTarget.getAttribute('data-qty-action');
          const id = e.currentTarget.getAttribute('data-id');
          updateItemQuantity(id, action === 'inc' ? 1 : -1);
        });
      });
    }
  }

  // Drawer Toggle
  function openCartDrawer() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartOpenBtn.addEventListener('click', openCartDrawer);
  mobileBarCartBtn.addEventListener('click', openCartDrawer);
  cartCloseBtn.addEventListener('click', closeCartDrawer);
  cartOverlay.addEventListener('click', closeCartDrawer);
  clearCartBtn.addEventListener('click', clearCart);

  // WhatsApp Checkout Action
  whatsappCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('يرجى إضافة وجبات إلى السلة أولاً!');
      return;
    }

    const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const grandTotal = subtotal + 35;

    let itemsList = '';
    cart.forEach(item => {
      itemsList += `• ${item.quantity}x ${item.name} (${(item.price * item.quantity).toLocaleString('ar-EG')} ج.م)\n`;
    });

    const message = 
`*السلام عليكم مطعم مذاق، أود تأكيد طلب دليفري جديد:*
-------------------------------------
${itemsList}
-------------------------------------
*المجموع الفرعي:* ${subtotal.toLocaleString('ar-EG')} ج.م
*رسوم التوصيل:* 35 ج.م
*الإجمالي النهائي:* ${grandTotal.toLocaleString('ar-EG')} ج.م

*بيانات العميل:*
الاسم: 
العنوان التفصيلي: 
ملاحظات على الطلب: 

شكراً لكم!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/201098765432?text=${encodedMsg}`;
    
    closeCartDrawer();
    showToast('جاري فتح واتساب لإرسال تفاصيل طلبك...');
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  });

  // ==========================================================================
  // 4. Mobile Navigation Drawer
  // ==========================================================================
  function openMobileDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileMenuBtn.addEventListener('click', openMobileDrawer);
  drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  drawerOverlay.addEventListener('click', closeMobileDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // ==========================================================================
  // 5. Table Reservation Form & Modal
  // ==========================================================================
  function getLocalDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Set default minimum date to today in local time
  const resDateInput = document.getElementById('resDate');
  const todayStr = getLocalDateString();
  resDateInput.min = todayStr;
  resDateInput.value = todayStr;

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const branch = document.getElementById('resBranch').value;
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const notes = document.getElementById('resNotes').value.trim();

    if (!name || !phone) {
      showToast('يرجى كتابة الاسم ورقم الهاتف بالكامل');
      return;
    }

    // Generate simulated ticket number
    const ticketId = 'MZQ-' + Math.floor(1000 + Math.random() * 9000);

    // Build ticket HTML
    reservationTicket.innerHTML = `
      <div class="ticket-row">
        <span class="ticket-label">رقم الحجز:</span>
        <span class="ticket-value text-gold">${ticketId}</span>
      </div>
      <div class="ticket-row">
        <span class="ticket-label">الاسم:</span>
        <span class="ticket-value">${name}</span>
      </div>
      <div class="ticket-row">
        <span class="ticket-label">الفرع:</span>
        <span class="ticket-value">${branch}</span>
      </div>
      <div class="ticket-row">
        <span class="ticket-label">التاريخ والوقت:</span>
        <span class="ticket-value">${date} | ${time}</span>
      </div>
      <div class="ticket-row">
        <span class="ticket-label">عدد الضيوف:</span>
        <span class="ticket-value">${guests}</span>
      </div>
      ${notes ? `
      <div class="ticket-row">
        <span class="ticket-label">ملاحظات:</span>
        <span class="ticket-value">${notes}</span>
      </div>` : ''}
    `;

    // Prepare WhatsApp Confirmation Link
    const waText = 
`*السلام عليكم مطعم مذاق، أود تأكيد حجز طاولة:*
- رقم الحجز: ${ticketId}
- الاسم: ${name}
- الفرع: ${branch}
- الموعد: ${date} في تمام الساعة ${time}
- عدد الأفراد: ${guests}
${notes ? `- ملاحظات: ${notes}` : ''}`;

    modalWhatsappConfirm.href = `https://wa.me/201098765432?text=${encodeURIComponent(waText)}`;

    // Open Modal
    reservationModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset Form
    reservationForm.reset();
    resDateInput.value = todayStr;
  });

  closeModalBtn.addEventListener('click', () => {
    reservationModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  reservationModal.addEventListener('click', (e) => {
    if (e.target === reservationModal) {
      reservationModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ==========================================================================
  // 6. Keyboard Accessibility (Escape key closes modals/drawers)
  // ==========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (reservationModal.classList.contains('active')) {
        reservationModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (cartDrawer.classList.contains('active')) {
        closeCartDrawer();
      }
      if (mobileDrawer.classList.contains('active')) {
        closeMobileDrawer();
      }
    }
  });

  // ==========================================================================
  // 7. ScrollSpy: Highlighting Active Nav Link while Scrolling
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileQuickLinks = document.querySelectorAll('.mobile-quick-bar .quick-item');

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        mobileQuickLinks.forEach(btn => {
          if (btn.tagName === 'A') {
            btn.classList.toggle('active', btn.getAttribute('href') === `#${id}`);
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ==========================================================================
  // 8. Toast Notification Helper
  // ==========================================================================
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // ==========================================================================
  // 9. Initial Bootstrap
  // ==========================================================================
  renderMenu();
  updateCartUI();
  updateActiveNav();
});
