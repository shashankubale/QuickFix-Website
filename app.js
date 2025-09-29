// QuickFix Application JavaScript
class QuickFixApp {
    constructor() {
        this.currentUser = null;
        this.currentRole = 'customer';
        this.currentPage = 'home';
        this.selectedProvider = null;
        this.notifications = [];
        
        // Application data from the specification
        this.data = {
            serviceCategories: [
                {id: "plumbing", name: "Plumbing", icon: "🔧", description: "Pipe repairs, installations, and maintenance"},
                {id: "electrical", name: "Electrical", icon: "⚡", description: "Wiring, installations, and electrical repairs"},
                {id: "carpentry", name: "Carpentry", icon: "🔨", description: "Furniture repair, installations, and woodwork"},
                {id: "painting", name: "Painting", icon: "🎨", description: "Interior and exterior painting services"},
                {id: "cleaning", name: "Cleaning", icon: "🧽", description: "Deep cleaning and maintenance services"},
                {id: "appliance-repair", name: "Appliance Repair", icon: "🔌", description: "Repair of home appliances"},
                {id: "pest-control", name: "Pest Control", icon: "🐛", description: "Professional pest management"},
                {id: "gardening", name: "Gardening", icon: "🌱", description: "Garden maintenance and landscaping"},
                {id: "home-security", name: "Home Security", icon: "🔒", description: "Security system installation"},
                {id: "interior-design", name: "Interior Design", icon: "🏠", description: "Home decoration and design"}
            ],
            providers: [
                {
                    id: "provider-1", name: "Rajesh Kumar", businessName: "Reliable Plumbing Services",
                    categories: ["plumbing"], rating: 4.8, reviewsCount: 24, completedJobs: 45,
                    phone: "+91 98765 43210", availability: true, priceRange: "₹300-800",
                    experience: "8 years", location: "Cidco, Aurangabad",
                    services: ["Emergency plumbing repairs", "Pipe installation and repair", "Bathroom fittings", "Water heater installation"],
                    about: "Professional plumber with 8 years of experience in residential and commercial plumbing.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: "provider-2", name: "Amit Sharma", businessName: "Expert Electricians",
                    categories: ["electrical"], rating: 4.9, reviewsCount: 31, completedJobs: 62,
                    phone: "+91 98765 43211", availability: true, priceRange: "₹250-600",
                    experience: "10 years", location: "Garkheda, Aurangabad",
                    services: ["Electrical repairs and maintenance", "Wiring installation", "Switch and socket installation", "Fan and light installation"],
                    about: "Certified electrician specializing in residential electrical work with safety as top priority.",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: "provider-3", name: "Priya Singh", businessName: "Home Sparkle Cleaning",
                    categories: ["cleaning"], rating: 4.7, reviewsCount: 18, completedJobs: 34,
                    phone: "+91 98765 43212", availability: true, priceRange: "₹200-500",
                    experience: "5 years", location: "Cantonment, Aurangabad",
                    services: ["Deep house cleaning", "Kitchen and bathroom cleaning", "Post-renovation cleaning", "Regular maintenance cleaning"],
                    about: "Professional cleaning service with eco-friendly products and attention to detail.",
                    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: "provider-4", name: "Suresh Patil", businessName: "Wood Master Carpentry",
                    categories: ["carpentry"], rating: 4.6, reviewsCount: 22, completedJobs: 38,
                    phone: "+91 98765 43213", availability: true, priceRange: "₹400-1000",
                    experience: "12 years", location: "MIDC, Aurangabad",
                    services: ["Furniture repair and restoration", "Custom furniture making", "Door and window installation", "Kitchen cabinet work"],
                    about: "Master carpenter with expertise in both modern and traditional woodworking techniques.",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: "provider-5", name: "Neha Joshi", businessName: "Color Magic Painters",
                    categories: ["painting"], rating: 4.5, reviewsCount: 16, completedJobs: 28,
                    phone: "+91 98765 43214", availability: false, priceRange: "₹15-25/sq ft",
                    experience: "6 years", location: "N-5 Cidco, Aurangabad",
                    services: ["Interior wall painting", "Exterior house painting", "Texture and decorative painting", "Wood polishing"],
                    about: "Professional painting contractor specializing in residential and commercial projects.",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: "provider-6", name: "Vikram Desai", businessName: "Fix-It Electronics",
                    categories: ["appliance-repair"], rating: 4.4, reviewsCount: 12, completedJobs: 25,
                    phone: "+91 98765 43215", availability: true, priceRange: "₹200-800",
                    experience: "7 years", location: "Bajajnagar, Aurangabad",
                    services: ["Washing machine repair", "Refrigerator servicing", "AC installation and repair", "Microwave and other appliances"],
                    about: "Experienced technician for all major home appliance brands with quick service guarantee.",
                    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
                }
            ],
            bookings: [
                {
                    id: "booking-1", customerId: "customer-1", providerId: "provider-1",
                    category: "plumbing", title: "Kitchen sink repair",
                    description: "Kitchen sink is blocked and water is not draining properly. Needs urgent fixing.",
                    address: {line1: "A-203, Sunrise Apartments", line2: "Near City Mall", city: "Aurangabad", pincode: "431001"},
                    scheduledAt: "2024-01-20T10:00:00", status: "COMPLETED", priceEstimate: 500, finalPrice: 450,
                    paymentStatus: "PAID", createdAt: "2024-01-18T08:30:00", acceptedAt: "2024-01-18T09:15:00",
                    inProgressAt: "2024-01-20T10:00:00", completedAt: "2024-01-20T11:30:00", paidAt: "2024-01-20T12:00:00",
                    providerName: "Reliable Plumbing Services", customerName: "Ravi Mehta"
                },
                {
                    id: "booking-2", customerId: "customer-2", providerId: "provider-2",
                    category: "electrical", title: "Fan installation",
                    description: "Need to install 2 ceiling fans in bedrooms. Wiring is already done.",
                    address: {line1: "B-45, Green Valley Society", line2: "Garkheda Road", city: "Aurangabad", pincode: "431009"},
                    scheduledAt: "2024-01-22T14:00:00", status: "IN_PROGRESS", priceEstimate: 400, finalPrice: null,
                    paymentStatus: "PENDING", createdAt: "2024-01-21T09:00:00", acceptedAt: "2024-01-21T10:30:00",
                    inProgressAt: "2024-01-22T14:00:00", providerName: "Expert Electricians", customerName: "Sunita Agarwal"
                },
                {
                    id: "booking-3", customerId: "customer-1", providerId: null,
                    category: "cleaning", title: "Deep house cleaning",
                    description: "Need complete house cleaning after renovation. 3 BHK apartment.",
                    address: {line1: "C-12, Royal Residency", line2: "Cantonment Area", city: "Aurangabad", pincode: "431003"},
                    scheduledAt: "2024-01-25T09:00:00", status: "REQUESTED", priceEstimate: 800, finalPrice: null,
                    paymentStatus: "PENDING", createdAt: "2024-01-22T16:20:00", customerName: "Ravi Mehta"
                }
            ]
        };

        // Initialize the application
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderServiceCategories();
        this.setupMobileMenu();
        this.initializeAuth();
        this.setMinDateTime();
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('loginBtn').addEventListener('click', () => this.showAuthModal('login'));
        document.getElementById('signupBtn').addEventListener('click', () => this.showAuthModal('signup'));
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
        document.getElementById('dashboardBtn').addEventListener('click', () => this.showDashboard());

        // Role toggle
        document.querySelectorAll('.role-toggle__btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchRole(e.target.dataset.role));
        });

        // Hero actions
        document.getElementById('bookRepairBtn').addEventListener('click', () => this.showBookingModal());
        document.getElementById('becomeProviderBtn').addEventListener('click', () => this.switchRole('provider'));

        // CTA actions
        document.getElementById('ctaBookBtn').addEventListener('click', () => this.showBookingModal());
        document.getElementById('ctaBrowseBtn').addEventListener('click', () => this.showProvidersPage());

        // Search functionality - Fixed to work properly
        const searchBtn = document.querySelector('.search-bar__btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.performSearch();
            });
        }

        const searchInput = document.getElementById('heroSearch');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch();
                }
            });
        }

        // Modal handlers
        this.setupModalHandlers();

        // Auth form handlers
        this.setupAuthHandlers();

        // Booking form handler
        this.setupBookingHandler();

        // Notification handlers
        this.setupNotificationHandlers();

        // Navigation links - Fixed to handle services properly
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.target.getAttribute('href').substring(1);
                this.navigateToSection(target);
            });
        });

        // Dashboard navigation
        document.getElementById('newBookingBtn')?.addEventListener('click', () => this.showBookingModal());
        document.getElementById('viewBookingsBtn')?.addEventListener('click', () => this.showBookingsPage());
    }

    setupModalHandlers() {
        // Auth modal
        const authModal = document.getElementById('authModal');
        const authOverlay = document.getElementById('authModalOverlay');
        const authClose = document.getElementById('authModalClose');

        [authOverlay, authClose].forEach(el => {
            el.addEventListener('click', () => this.hideModal('authModal'));
        });

        // Booking modal
        const bookingModal = document.getElementById('bookingModal');
        const bookingOverlay = document.getElementById('bookingModalOverlay');
        const bookingClose = document.getElementById('bookingModalClose');

        [bookingOverlay, bookingClose].forEach(el => {
            el.addEventListener('click', () => this.hideModal('bookingModal'));
        });

        // Auth toggle
        document.getElementById('authToggleBtn').addEventListener('click', () => this.toggleAuthForm());
        document.getElementById('phoneLoginBtn').addEventListener('click', () => this.showPhoneLogin());
    }

    setupAuthHandlers() {
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignup();
        });

        document.getElementById('verifyOtpBtn')?.addEventListener('click', () => this.verifyOtp());
        document.getElementById('resendOtpBtn')?.addEventListener('click', () => this.resendOtp());
    }

    setupBookingHandler() {
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleBooking();
        });

        // Character count for description
        document.getElementById('bookingDescription').addEventListener('input', (e) => {
            const count = e.target.value.length;
            const countEl = e.target.nextElementSibling;
            countEl.textContent = `${count}/50 minimum`;
            countEl.style.color = count >= 50 ? '#10B981' : '#F59E0B';
        });
    }

    setupNotificationHandlers() {
        document.querySelector('.notification-btn')?.addEventListener('click', () => this.toggleNotificationPanel());
        document.getElementById('notificationPanelClose')?.addEventListener('click', () => this.hideNotificationPanel());
        document.getElementById('markAllReadBtn')?.addEventListener('click', () => this.markAllNotificationsRead());
    }

    setupMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const nav = document.getElementById('headerNav');
        
        toggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });
    }

    initializeAuth() {
        // Check for existing auth in localStorage (simulated)
        const savedUser = localStorage.getItem('quickfix_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.updateAuthUI();
            this.loadNotifications();
        }
    }

    setMinDateTime() {
        const now = new Date();
        now.setHours(now.getHours() + 1); // Minimum 1 hour advance
        const minDateTime = now.toISOString().slice(0, 16);
        const dateInput = document.getElementById('bookingDate');
        const timeInput = document.getElementById('bookingTime');
        
        if (dateInput) dateInput.min = minDateTime.split('T')[0];
        if (timeInput) timeInput.min = minDateTime.split('T')[1];
    }

    // Page Navigation - Fixed to handle all sections properly
    navigateToSection(target) {
        // Hide all main sections first
        document.querySelectorAll('.main > section').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Handle different navigation targets
        if (target === 'services') {
            // Show the home/landing page and scroll to services section
            const landingSection = document.getElementById('home');
            const servicesSection = document.getElementById('services');
            
            if (landingSection && servicesSection) {
                landingSection.classList.remove('hidden');
                setTimeout(() => {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (target === 'how-it-works') {
            // Show the home/landing page and scroll to how-it-works section
            const landingSection = document.getElementById('home');
            const howItWorksSection = document.getElementById('how-it-works');
            
            if (landingSection && howItWorksSection) {
                landingSection.classList.remove('hidden');
                setTimeout(() => {
                    howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (target === 'contact') {
            // Show the home/landing page and scroll to contact section
            const landingSection = document.getElementById('home');
            const contactSection = document.getElementById('contact');
            
            if (landingSection && contactSection) {
                landingSection.classList.remove('hidden');
                setTimeout(() => {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // Handle other targets (home, specific pages)
            const targetSection = document.getElementById(target === 'home' ? 'home' : target);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                if (target !== 'home') {
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                } else {
                    // Scroll to top for home
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        }
    }

    showDashboard() {
        if (!this.currentUser) {
            this.showAuthModal('login');
            return;
        }

        document.querySelectorAll('.main > section').forEach(section => {
            section.classList.add('hidden');
        });

        const dashboardId = this.currentUser.role === 'provider' ? 'providerDashboard' : 'customerDashboard';
        const dashboard = document.getElementById(dashboardId);
        dashboard.classList.remove('hidden');
        
        if (this.currentUser.role === 'customer') {
            this.renderCustomerDashboard();
        } else {
            this.renderProviderDashboard();
        }
    }

    showProvidersPage(category = '') {
        document.querySelectorAll('.main > section').forEach(section => {
            section.classList.add('hidden');
        });
        
        document.getElementById('providersPage').classList.remove('hidden');
        this.renderProviders(category);
        this.setupProviderFilters();
    }

    showBookingsPage() {
        if (!this.currentUser) {
            this.showAuthModal('login');
            return;
        }

        document.querySelectorAll('.main > section').forEach(section => {
            section.classList.add('hidden');
        });
        
        document.getElementById('bookingsPage').classList.remove('hidden');
        this.renderBookings();
        this.setupBookingFilters();
    }

    // Authentication
    showAuthModal(mode = 'login') {
        const modal = document.getElementById('authModal');
        const title = document.getElementById('authModalTitle');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const toggleText = document.getElementById('authToggleText');
        const toggleBtn = document.getElementById('authToggleBtn');

        modal.classList.remove('hidden');

        if (mode === 'login') {
            title.textContent = 'Login';
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            toggleText.textContent = "Don't have an account?";
            toggleBtn.textContent = 'Sign Up';
        } else {
            title.textContent = 'Sign Up';
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            toggleText.textContent = 'Already have an account?';
            toggleBtn.textContent = 'Login';
        }
    }

    toggleAuthForm() {
        const title = document.getElementById('authModalTitle');
        const isLogin = title.textContent === 'Login';
        this.showAuthModal(isLogin ? 'signup' : 'login');
    }

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }

        // Simulate login process
        this.showLoading();
        setTimeout(() => {
            const user = {
                id: 'user-1',
                name: email.includes('provider') ? 'Test Provider' : 'Test Customer',
                email: email,
                phone: '+91 98765 43210',
                role: email.includes('provider') ? 'provider' : this.currentRole,
                isPhoneVerified: true
            };

            this.currentUser = user;
            localStorage.setItem('quickfix_user', JSON.stringify(user));
            this.updateAuthUI();
            this.hideModal('authModal');
            this.hideLoading();
            this.showToast('Login successful!', 'success');
            this.loadNotifications();
        }, 1000);
    }

    handleSignup() {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const password = document.getElementById('signupPassword').value;
        const role = document.getElementById('signupRole').value;

        if (!name || !email || !phone || !password) {
            this.showToast('Please fill in all required fields', 'error');
            return;
        }

        if (!this.isValidEmail(email)) {
            this.showToast('Please enter a valid email', 'error');
            return;
        }

        if (!this.isValidPhone(phone)) {
            this.showToast('Please enter a valid 10-digit phone number', 'error');
            return;
        }

        // Simulate signup process
        this.showLoading();
        setTimeout(() => {
            const user = {
                id: 'user-' + Date.now(),
                name: name,
                email: email,
                phone: phone,
                role: role,
                isPhoneVerified: false
            };

            this.currentUser = user;
            localStorage.setItem('quickfix_user', JSON.stringify(user));
            this.updateAuthUI();
            this.hideModal('authModal');
            this.hideLoading();
            this.showToast('Account created successfully!', 'success');
            this.loadNotifications();
        }, 1000);
    }

    showPhoneLogin() {
        // Simulate phone OTP login
        const phone = prompt('Enter your phone number:');
        if (phone && this.isValidPhone(phone)) {
            this.showOtpSection();
            this.showToast('OTP sent to ' + phone, 'success');
        }
    }

    showOtpSection() {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('signupForm').classList.add('hidden');
        document.getElementById('otpSection').classList.remove('hidden');
    }

    verifyOtp() {
        const otp = document.getElementById('otpCode').value;
        if (otp.length === 6) {
            // Simulate OTP verification
            this.currentUser = {
                id: 'user-otp',
                name: 'OTP User',
                phone: '+91 98765 43210',
                role: this.currentRole,
                isPhoneVerified: true
            };
            localStorage.setItem('quickfix_user', JSON.stringify(this.currentUser));
            this.updateAuthUI();
            this.hideModal('authModal');
            this.showToast('Phone verified successfully!', 'success');
            this.loadNotifications();
        } else {
            this.showToast('Please enter valid 6-digit OTP', 'error');
        }
    }

    resendOtp() {
        this.showToast('OTP resent successfully!', 'success');
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('quickfix_user');
        this.updateAuthUI();
        this.navigateToSection('home');
        this.showToast('Logged out successfully', 'success');
    }

    updateAuthUI() {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const userMenu = document.getElementById('userMenu');
        const userName = document.getElementById('userName');
        const userRole = document.getElementById('userRole');

        if (this.currentUser) {
            loginBtn.classList.add('hidden');
            signupBtn.classList.add('hidden');
            userMenu.classList.remove('hidden');
            userName.textContent = this.currentUser.name;
            userRole.textContent = this.currentUser.role;
            this.currentRole = this.currentUser.role;
            this.updateRoleToggle();
        } else {
            loginBtn.classList.remove('hidden');
            signupBtn.classList.remove('hidden');
            userMenu.classList.add('hidden');
        }
    }

    switchRole(role) {
        this.currentRole = role;
        this.updateRoleToggle();
        
        if (this.currentUser) {
            this.currentUser.role = role;
            localStorage.setItem('quickfix_user', JSON.stringify(this.currentUser));
            this.showDashboard();
        }
    }

    updateRoleToggle() {
        document.querySelectorAll('.role-toggle__btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.role === this.currentRole);
        });
    }

    // Search and Filtering - Fixed search functionality
    performSearch() {
        const query = document.getElementById('heroSearch').value.trim();
        const category = document.getElementById('heroCategory').value;
        
        // Always navigate to providers page when search is performed
        this.showProvidersPage(category);
        
        // If there's a search query, filter by it
        if (query) {
            setTimeout(() => {
                this.filterProvidersByQuery(query);
                this.showToast(`Searching for "${query}"${category ? ` in ${category}` : ''}`, 'info');
            }, 100);
        } else if (category) {
            this.showToast(`Showing all ${category} providers`, 'info');
        } else {
            this.showToast('Showing all providers', 'info');
        }
    }

    filterProvidersByQuery(query) {
        const providers = this.data.providers.filter(provider => 
            provider.name.toLowerCase().includes(query.toLowerCase()) ||
            provider.businessName.toLowerCase().includes(query.toLowerCase()) ||
            provider.services.some(service => service.toLowerCase().includes(query.toLowerCase()))
        );
        this.renderFilteredProviders(providers);
    }

    setupProviderFilters() {
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const availableOnly = document.getElementById('availableOnly');

        [categoryFilter, sortFilter, availableOnly].forEach(filter => {
            if (filter) {
                filter.addEventListener('change', () => this.applyProviderFilters());
            }
        });
    }

    applyProviderFilters() {
        let providers = [...this.data.providers];
        
        const category = document.getElementById('categoryFilter').value;
        const sort = document.getElementById('sortFilter').value;
        const availableOnly = document.getElementById('availableOnly').checked;

        // Filter by category
        if (category) {
            providers = providers.filter(p => p.categories.includes(category));
        }

        // Filter by availability
        if (availableOnly) {
            providers = providers.filter(p => p.availability);
        }

        // Sort providers
        switch (sort) {
            case 'rating':
                providers.sort((a, b) => b.rating - a.rating);
                break;
            case 'price':
                providers.sort((a, b) => {
                    const aPrice = parseInt(a.priceRange.match(/\d+/)[0]);
                    const bPrice = parseInt(b.priceRange.match(/\d+/)[0]);
                    return aPrice - bPrice;
                });
                break;
            case 'experience':
                providers.sort((a, b) => {
                    const aExp = parseInt(a.experience);
                    const bExp = parseInt(b.experience);
                    return bExp - aExp;
                });
                break;
        }

        this.renderFilteredProviders(providers);
    }

    setupBookingFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterBookings(e.target.dataset.status);
            });
        });
    }

    filterBookings(status) {
        let bookings = [...this.data.bookings];
        
        if (status !== 'all') {
            bookings = bookings.filter(b => b.status === status);
        }

        this.renderFilteredBookings(bookings);
    }

    // Booking System
    showBookingModal(providerId = null) {
        if (!this.currentUser) {
            this.showAuthModal('login');
            return;
        }

        if (this.currentUser.role !== 'customer') {
            this.showToast('Only customers can book services', 'error');
            return;
        }

        const modal = document.getElementById('bookingModal');
        modal.classList.remove('hidden');

        // Populate provider selection if specific provider
        if (providerId) {
            this.populateProviderSelection(providerId);
        }

        this.setMinDateTime();
    }

    populateProviderSelection(providerId) {
        const select = document.getElementById('selectedProvider');
        const provider = this.data.providers.find(p => p.id === providerId);
        
        if (provider) {
            select.innerHTML = `<option value="${provider.id}">${provider.name} - ${provider.businessName}</option>`;
            select.value = provider.id;
        }
    }

    handleBooking() {
        const formData = {
            category: document.getElementById('bookingCategory').value,
            title: document.getElementById('bookingTitle').value,
            description: document.getElementById('bookingDescription').value,
            date: document.getElementById('bookingDate').value,
            time: document.getElementById('bookingTime').value,
            address: {
                line1: document.getElementById('bookingAddressLine1').value,
                line2: document.getElementById('bookingAddressLine2').value,
                city: document.getElementById('bookingCity').value,
                pincode: document.getElementById('bookingPincode').value
            },
            providerId: document.getElementById('selectedProvider').value
        };

        if (!this.validateBookingForm(formData)) return;

        // Create booking
        const booking = {
            id: 'booking-' + Date.now(),
            customerId: this.currentUser.id,
            providerId: formData.providerId || null,
            category: formData.category,
            title: formData.title,
            description: formData.description,
            address: formData.address,
            scheduledAt: formData.date + 'T' + formData.time,
            status: 'REQUESTED',
            priceEstimate: this.estimatePrice(formData.category),
            paymentStatus: 'PENDING',
            createdAt: new Date().toISOString(),
            customerName: this.currentUser.name
        };

        this.data.bookings.push(booking);
        this.hideModal('bookingModal');
        this.showToast('Booking created successfully!', 'success');
        this.resetBookingForm();
        
        // Simulate provider notification
        setTimeout(() => {
            this.addNotification({
                type: 'BOOKING_CREATED',
                title: 'Booking Created',
                message: `Your ${formData.category} service request has been submitted.`,
                bookingId: booking.id
            });
        }, 1000);
    }

    validateBookingForm(data) {
        if (!data.category) {
            this.showToast('Please select a service category', 'error');
            return false;
        }

        if (!data.title) {
            this.showToast('Please enter a service title', 'error');
            return false;
        }

        if (data.description.length < 50) {
            this.showToast('Description must be at least 50 characters', 'error');
            return false;
        }

        if (!data.date || !data.time) {
            this.showToast('Please select date and time', 'error');
            return false;
        }

        const scheduledTime = new Date(data.date + 'T' + data.time);
        const minTime = new Date();
        minTime.setHours(minTime.getHours() + 1);

        if (scheduledTime < minTime) {
            this.showToast('Booking must be at least 1 hour in advance', 'error');
            return false;
        }

        if (!data.address.line1 || !data.address.pincode) {
            this.showToast('Please provide complete address', 'error');
            return false;
        }

        return true;
    }

    estimatePrice(category) {
        const priceMap = {
            'plumbing': 400,
            'electrical': 350,
            'cleaning': 300,
            'carpentry': 600,
            'painting': 500,
            'appliance-repair': 450
        };
        return priceMap[category] || 400;
    }

    resetBookingForm() {
        document.getElementById('bookingForm').reset();
    }

    // Rendering Methods
    renderServiceCategories() {
        const grid = document.getElementById('categoriesGrid');
        if (!grid) return;

        grid.innerHTML = this.data.serviceCategories.map(category => `
            <div class="category-card" onclick="app.showProvidersPage('${category.id}')">
                <div class="category-card__icon">${category.icon}</div>
                <div class="category-card__name">${category.name}</div>
                <div class="category-card__description">${category.description}</div>
            </div>
        `).join('');
    }

    renderProviders(category = '') {
        let providers = this.data.providers;
        if (category) {
            providers = providers.filter(p => p.categories.includes(category));
        }
        this.renderFilteredProviders(providers);
    }

    renderFilteredProviders(providers) {
        const container = document.getElementById('providersList');
        if (!container) return;

        container.innerHTML = providers.length ? 
            providers.map(provider => this.createProviderCard(provider)).join('') :
            '<div class="text-center p-20">No providers found matching your criteria.</div>';
    }

    createProviderCard(provider) {
        const stars = '⭐'.repeat(Math.floor(provider.rating));
        const availability = provider.availability ? 
            '<span class="status-dot available"></span>Available' :
            '<span class="status-dot unavailable"></span>Unavailable';

        return `
            <div class="provider-card" onclick="app.showProviderDetail('${provider.id}')">
                <div class="provider-card__header">
                    <img src="${provider.image}" alt="${provider.name}" class="provider-avatar">
                    <div class="provider-info">
                        <h3>${provider.name}</h3>
                        <div class="provider-business">${provider.businessName}</div>
                        <div class="provider-location">📍 ${provider.location}</div>
                    </div>
                </div>
                <div class="provider-card__body">
                    <div class="provider-categories">
                        ${provider.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                    <div class="provider-stats">
                        <div class="provider-rating">
                            <span class="rating-stars">${stars}</span>
                            <span>${provider.rating} (${provider.reviewsCount} reviews)</span>
                        </div>
                        <div class="provider-price">${provider.priceRange}</div>
                    </div>
                    <div class="availability-status">
                        ${availability}
                    </div>
                </div>
                <div class="provider-card__footer">
                    <button class="btn btn--primary btn--full-width" onclick="event.stopPropagation(); app.showBookingModal('${provider.id}')">
                        Book Now
                    </button>
                </div>
            </div>
        `;
    }

    showProviderDetail(providerId) {
        const provider = this.data.providers.find(p => p.id === providerId);
        if (!provider) return;

        document.querySelectorAll('.main > section').forEach(section => {
            section.classList.add('hidden');
        });

        const container = document.getElementById('providerDetailContent');
        const stars = '⭐'.repeat(Math.floor(provider.rating));

        container.innerHTML = `
            <div class="provider-detail">
                <button class="btn btn--outline mb-16" onclick="app.showProvidersPage()">← Back to Providers</button>
                
                <div class="provider-header">
                    <img src="${provider.image}" alt="${provider.name}" class="provider-avatar" style="width: 120px; height: 120px;">
                    <div class="provider-info">
                        <h1>${provider.name}</h1>
                        <h2 class="provider-business">${provider.businessName}</h2>
                        <div class="provider-meta">
                            <div>📍 ${provider.location}</div>
                            <div>📞 ${provider.phone}</div>
                            <div>⏰ ${provider.experience} experience</div>
                            <div>💰 ${provider.priceRange}</div>
                        </div>
                        <div class="provider-rating">
                            <span class="rating-stars">${stars}</span>
                            <span>${provider.rating} (${provider.reviewsCount} reviews) • ${provider.completedJobs} jobs completed</span>
                        </div>
                    </div>
                </div>

                <div class="provider-sections">
                    <section class="provider-about">
                        <h3>About</h3>
                        <p>${provider.about}</p>
                    </section>

                    <section class="provider-services">
                        <h3>Services Offered</h3>
                        <ul>
                            ${provider.services.map(service => `<li>${service}</li>`).join('')}
                        </ul>
                    </section>

                    <section class="provider-categories">
                        <h3>Categories</h3>
                        <div class="provider-categories">
                            ${provider.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                        </div>
                    </section>
                </div>

                <div class="provider-actions">
                    <button class="btn btn--primary btn--lg" onclick="app.showBookingModal('${provider.id}')">
                        Book Service
                    </button>
                </div>
            </div>
        `;

        document.getElementById('providerDetailPage').classList.remove('hidden');
    }

    renderCustomerDashboard() {
        const recentBookings = document.getElementById('recentBookings');
        const categoryShortcuts = document.getElementById('categoryShortcuts');

        // Recent bookings
        const userBookings = this.data.bookings.filter(b => b.customerId === this.currentUser.id).slice(0, 3);
        recentBookings.innerHTML = userBookings.length ?
            userBookings.map(booking => this.createBookingCard(booking)).join('') :
            '<p class="text-muted">No recent bookings</p>';

        // Category shortcuts
        categoryShortcuts.innerHTML = this.data.serviceCategories.slice(0, 8).map(category => `
            <a href="#" class="category-shortcut" onclick="app.showProvidersPage('${category.id}')">
                <div class="shortcut-icon">${category.icon}</div>
                <div class="shortcut-name">${category.name}</div>
            </a>
        `).join('');
    }

    renderProviderDashboard() {
        const incomingRequests = document.getElementById('incomingRequests');
        const availabilityToggle = document.getElementById('availabilityToggle');

        // Set availability toggle
        if (availabilityToggle) {
            availabilityToggle.checked = true;
            // Remove any existing event listeners to prevent duplicates
            availabilityToggle.removeEventListener('change', this.handleAvailabilityChange);
            availabilityToggle.addEventListener('change', (e) => {
                const status = e.target.checked ? 'Available' : 'Unavailable';
                this.showToast(`Status updated: ${status}`, 'success');
            });
        }

        // Incoming requests (simulated)
        const requests = this.data.bookings.filter(b => b.status === 'REQUESTED').slice(0, 3);
        if (incomingRequests) {
            incomingRequests.innerHTML = requests.length ?
                requests.map(booking => this.createIncomingRequestCard(booking)).join('') :
                '<p class="text-muted">No incoming requests</p>';
        }
    }

    createIncomingRequestCard(booking) {
        return `
            <div class="booking-card">
                <div class="booking-card__header">
                    <div>
                        <h4 class="booking-title">${booking.title}</h4>
                        <div class="booking-id">ID: ${booking.id}</div>
                    </div>
                    <span class="booking-status requested">Requested</span>
                </div>
                <div class="booking-details">
                    <p>${booking.description}</p>
                    <div class="booking-meta">
                        <span>📅 ${new Date(booking.scheduledAt).toLocaleDateString()}</span>
                        <span>🕐 ${new Date(booking.scheduledAt).toLocaleTimeString()}</span>
                        <span>💰 ₹${booking.priceEstimate}</span>
                    </div>
                </div>
                <div class="booking-actions">
                    <button class="btn btn--primary btn--sm" onclick="app.acceptBooking('${booking.id}')">Accept</button>
                    <button class="btn btn--outline btn--sm" onclick="app.rejectBooking('${booking.id}')">Decline</button>
                </div>
            </div>
        `;
    }

    acceptBooking(bookingId) {
        const booking = this.data.bookings.find(b => b.id === bookingId);
        if (booking) {
            booking.status = 'ACCEPTED';
            booking.providerId = 'provider-1'; // Current provider
            booking.acceptedAt = new Date().toISOString();
            this.showToast('Booking accepted successfully!', 'success');
            this.renderProviderDashboard();
        }
    }

    rejectBooking(bookingId) {
        const index = this.data.bookings.findIndex(b => b.id === bookingId);
        if (index > -1) {
            this.data.bookings.splice(index, 1);
            this.showToast('Booking declined', 'warning');
            this.renderProviderDashboard();
        }
    }

    renderBookings() {
        const userBookings = this.data.bookings.filter(b => b.customerId === this.currentUser.id);
        this.renderFilteredBookings(userBookings);
    }

    renderFilteredBookings(bookings) {
        const container = document.getElementById('bookingsList');
        if (container) {
            container.innerHTML = bookings.length ?
                bookings.map(booking => this.createBookingCard(booking, true)).join('') :
                '<div class="text-center p-20">No bookings found.</div>';
        }
    }

    createBookingCard(booking, detailed = false) {
        const statusClass = booking.status.toLowerCase().replace('_', '_');
        const statusText = booking.status.replace('_', ' ');

        return `
            <div class="booking-card" onclick="app.showBookingDetail('${booking.id}')">
                <div class="booking-card__header">
                    <div>
                        <h4 class="booking-title">${booking.title}</h4>
                        <div class="booking-id">ID: ${booking.id}</div>
                        ${booking.providerName ? `<div class="provider-name">Provider: ${booking.providerName}</div>` : ''}
                    </div>
                    <span class="booking-status ${statusClass}">${statusText}</span>
                </div>
                <div class="booking-details">
                    ${detailed ? `<p class="booking-description">${booking.description}</p>` : ''}
                    <div class="booking-meta">
                        <span>📅 ${new Date(booking.scheduledAt).toLocaleDateString()}</span>
                        <span>🕐 ${new Date(booking.scheduledAt).toLocaleTimeString()}</span>
                        <span>💰 ₹${booking.finalPrice || booking.priceEstimate}</span>
                        <span>📍 ${booking.address.line1}, ${booking.address.city}</span>
                    </div>
                </div>
            </div>
        `;
    }

    showBookingDetail(bookingId) {
        const booking = this.data.bookings.find(b => b.id === bookingId);
        if (!booking) return;

        document.querySelectorAll('.main > section').forEach(section => {
            section.classList.add('hidden');
        });

        const container = document.getElementById('bookingDetailContent');
        container.innerHTML = this.createBookingDetail(booking);
        document.getElementById('bookingDetailPage').classList.remove('hidden');
    }

    createBookingDetail(booking) {
        const timeline = this.createBookingTimeline(booking);
        const statusClass = booking.status.toLowerCase().replace('_', '_');

        return `
            <div class="booking-detail">
                <button class="btn btn--outline mb-16" onclick="app.showBookingsPage()">← Back to Bookings</button>
                
                <div class="booking-detail__header">
                    <h1>${booking.title}</h1>
                    <span class="booking-status ${statusClass}">${booking.status.replace('_', ' ')}</span>
                </div>

                <div class="booking-info">
                    <div class="info-section">
                        <h3>Service Details</h3>
                        <p><strong>Category:</strong> ${booking.category}</p>
                        <p><strong>Description:</strong> ${booking.description}</p>
                        <p><strong>Scheduled:</strong> ${new Date(booking.scheduledAt).toLocaleString()}</p>
                        <p><strong>Estimated Price:</strong> ₹${booking.priceEstimate}</p>
                        ${booking.finalPrice ? `<p><strong>Final Price:</strong> ₹${booking.finalPrice}</p>` : ''}
                    </div>

                    <div class="info-section">
                        <h3>Address</h3>
                        <p>${booking.address.line1}</p>
                        ${booking.address.line2 ? `<p>${booking.address.line2}</p>` : ''}
                        <p>${booking.address.city} - ${booking.address.pincode}</p>
                    </div>

                    ${booking.providerName ? `
                        <div class="info-section">
                            <h3>Provider</h3>
                            <p><strong>Name:</strong> ${booking.providerName}</p>
                        </div>
                    ` : ''}
                </div>

                <div class="booking-timeline">
                    <h3>Status Timeline</h3>
                    ${timeline}
                </div>

                ${booking.status === 'COMPLETED' && this.currentUser.role === 'customer' ? `
                    <div class="booking-actions">
                        <button class="btn btn--primary" onclick="app.showRatingModal('${booking.id}')">Rate & Review</button>
                    </div>
                ` : ''}
            </div>
        `;
    }

    createBookingTimeline(booking) {
        const stages = [
            { key: 'createdAt', status: 'REQUESTED', title: 'Booking Requested', icon: '📝' },
            { key: 'acceptedAt', status: 'ACCEPTED', title: 'Booking Accepted', icon: '✅' },
            { key: 'inProgressAt', status: 'IN_PROGRESS', title: 'Work Started', icon: '🔧' },
            { key: 'completedAt', status: 'COMPLETED', title: 'Work Completed', icon: '✓' },
            { key: 'paidAt', status: 'PAID', title: 'Payment Completed', icon: '💰' }
        ];

        const currentStageIndex = stages.findIndex(stage => stage.status === booking.status);

        return `
            <div class="timeline">
                ${stages.map((stage, index) => {
                    const isCompleted = index <= currentStageIndex;
                    const isCurrent = index === currentStageIndex;
                    const isPending = index > currentStageIndex;
                    
                    let statusClass = 'pending';
                    if (isCompleted && !isCurrent) statusClass = 'completed';
                    if (isCurrent) statusClass = 'current';

                    const timestamp = booking[stage.key];
                    
                    return `
                        <div class="timeline-item ${statusClass}">
                            <div class="timeline-icon ${statusClass}">
                                ${stage.icon}
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-title">${stage.title}</div>
                                ${timestamp ? `<div class="timeline-time">${new Date(timestamp).toLocaleString()}</div>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // Notification System
    loadNotifications() {
        // Simulate loading notifications
        this.notifications = [
            {
                id: 'notif-1',
                type: 'STATUS_UPDATE',
                title: 'Booking Update',
                message: 'Your plumbing service has been completed.',
                isRead: false,
                createdAt: new Date().toISOString()
            },
            {
                id: 'notif-2',
                type: 'BOOKING_ACCEPTED',
                title: 'Booking Accepted',
                message: 'Expert Electricians has accepted your request.',
                isRead: true,
                createdAt: new Date(Date.now() - 86400000).toISOString()
            }
        ];
        this.updateNotificationBadge();
    }

    addNotification(notification) {
        notification.id = 'notif-' + Date.now();
        notification.isRead = false;
        notification.createdAt = new Date().toISOString();
        this.notifications.unshift(notification);
        this.updateNotificationBadge();
    }

    toggleNotificationPanel() {
        const panel = document.getElementById('notificationPanel');
        if (panel) {
            panel.classList.toggle('hidden');
            
            if (!panel.classList.contains('hidden')) {
                this.renderNotifications();
            }
        }
    }

    hideNotificationPanel() {
        const panel = document.getElementById('notificationPanel');
        if (panel) {
            panel.classList.add('hidden');
        }
    }

    renderNotifications() {
        const container = document.getElementById('notificationsList');
        if (container) {
            container.innerHTML = this.notifications.length ?
                this.notifications.map(notif => this.createNotificationItem(notif)).join('') :
                '<div class="text-center p-20 text-muted">No notifications</div>';
        }
    }

    createNotificationItem(notification) {
        const timeAgo = this.getTimeAgo(notification.createdAt);
        return `
            <div class="notification-item ${!notification.isRead ? 'unread' : ''}" onclick="app.markNotificationRead('${notification.id}')">
                <div class="notification-title">${notification.title}</div>
                <div class="notification-message">${notification.message}</div>
                <div class="notification-time">${timeAgo}</div>
            </div>
        `;
    }

    markNotificationRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
            notification.isRead = true;
            this.updateNotificationBadge();
            this.renderNotifications();
        }
    }

    markAllNotificationsRead() {
        this.notifications.forEach(n => n.isRead = true);
        this.updateNotificationBadge();
        this.renderNotifications();
    }

    updateNotificationBadge() {
        const badge = document.getElementById('notificationBadge');
        if (badge) {
            const unreadCount = this.notifications.filter(n => !n.isRead).length;
            
            if (unreadCount > 0) {
                badge.textContent = unreadCount;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }
    }

    // Utility Functions
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
        
        // Reset forms when closing modals
        if (modalId === 'authModal') {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const otpSection = document.getElementById('otpSection');
            
            if (loginForm) loginForm.reset();
            if (signupForm) signupForm.reset();
            if (otpSection) otpSection.classList.add('hidden');
        }
        
        if (modalId === 'bookingModal') {
            this.resetBookingForm();
        }
    }

    showLoading() {
        const loading = document.getElementById('loadingOverlay');
        if (loading) {
            loading.classList.remove('hidden');
        }
    }

    hideLoading() {
        const loading = document.getElementById('loadingOverlay');
        if (loading) {
            loading.classList.add('hidden');
        }
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
            </div>
        `;
        
        const container = document.getElementById('toastContainer');
        if (container) {
            container.appendChild(toast);
            
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 5000);
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^[0-9]{10}$/.test(phone.replace(/\D/g, ''));
    }

    getTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString();
    }
}

// Initialize the application
const app = new QuickFixApp();

// Global event listeners for dynamic content
document.addEventListener('click', (e) => {
    // Close dropdowns when clicking outside
    if (!e.target.closest('.notification-panel') && !e.target.closest('.notification-btn')) {
        app.hideNotificationPanel();
    }
});

// Handle responsive navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const headerNav = document.getElementById('headerNav');
        if (headerNav) {
            headerNav.classList.remove('mobile-open');
        }
    }
});

// Add some sample interactions for demo
setTimeout(() => {
    if (app.currentUser && app.notifications.length === 0) {
        app.addNotification({
            type: 'WELCOME',
            title: 'Welcome to QuickFix!',
            message: 'Start by exploring our services or booking your first repair.'
        });
    }
}, 2000);