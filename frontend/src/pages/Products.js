import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, MessageCircle, FileText, Utensils, Package, BarChart2, Users, Printer, ShoppingBag, Calculator, Layers, ShoppingCart, IndianRupee, Home, CreditCard, Wrench, GraduationCap, BookOpen, Truck, Calendar, Fuel } from 'lucide-react';
import '../styles/global.css';
import '../styles/product.css';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productType = queryParams.get('type') || 'restaurant';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search]);

  const restaurantFeatures = [
    { text: "Fast & Accurate Billing", icon: <FileText size={20} color="#ea580c" /> },
    { text: "Table & Order Management", icon: <Utensils size={20} color="#ea580c" /> },
    { text: "Inventory & Stock Control", icon: <Package size={20} color="#ea580c" /> },
    { text: "Sales & Reports Dashboard", icon: <BarChart2 size={20} color="#ea580c" /> },
    { text: "Multi-User Access & Roles", icon: <Users size={20} color="#ea580c" /> },
    { text: "Print & Share Bills Instantly", icon: <Printer size={20} color="#ea580c" /> }
  ];

  const wholesaleFeatures = [
    { title: "Wholesale Management", desc: "Manage bulk orders, suppliers, pricing and stock with ease.", icon: <Package size={20} /> },
    { title: "Retail Management", desc: "Simplify retail sales, offers, returns and customer service.", icon: <ShoppingBag size={20} /> },
    { title: "POS Billing", desc: "Fast billing with barcode scanning, multiple payments & invoices.", icon: <Calculator size={20} /> },
    { title: "Inventory Control", desc: "Real-time stock tracking, low stock alerts & multi-warehouse.", icon: <Layers size={20} /> },
    { title: "Reports & Analytics", desc: "Powerful reports and insights to grow your business smarter.", icon: <BarChart2 size={20} /> },
    { title: "Customer Management", desc: "Maintain customer data, loyalty points, credit & purchase history.", icon: <Users size={20} /> }
  ];


  const miniappFeatures = [
    { title: "Order Management", desc: "Take dine-in, takeaway & delivery orders with ease.", icon: <ShoppingCart size={20} /> },
    { title: "Billing & Invoicing", desc: "Generate fast and accurate bills with multiple payment options.", icon: <IndianRupee size={20} /> },
    { title: "Inventory Management", desc: "Track stock in real-time and get low-stock alerts.", icon: <Package size={20} /> },
    { title: "Sales & Reports", desc: "View real-time sales, profits, and performance reports.", icon: <BarChart2 size={20} /> },
    { title: "Customer Management", desc: "Build customer profiles and track purchase history.", icon: <Users size={20} /> }
  ];

  const pmsFeatures = [
    { title: "Property Management", desc: "Add, update and manage all your properties with ease.", icon: <Home size={20} /> },
    { title: "Tenant Management", desc: "Manage tenant profiles, leases, documents and communication.", icon: <Users size={20} /> },
    { title: "Lease Management", desc: "Track lease agreements, renewal dates and important terms.", icon: <FileText size={20} /> },
    { title: "Maintenance Management", desc: "Raise requests, assign tasks and track maintenance status.", icon: <Wrench size={20} /> },
    { title: "Rent & Payment Tracking", desc: "Track rent collection, payments, due dates and invoices.", icon: <CreditCard size={20} /> },
    { title: "Reports & Analytics", desc: "Get real-time insights and make data-driven decisions.", icon: <BarChart2 size={20} /> }
  ];

  const schoolFeatures = [
    { title: "Student Management", desc: "Centralize student information and track academic progress.", icon: <GraduationCap size={20} /> },
    { title: "Staff Management", desc: "Manage staff records, roles, attendance & performance.", icon: <Users size={20} /> },
    { title: "Academics Management", desc: "Organize classes, subjects, timetables and examinations.", icon: <BookOpen size={20} /> },
    { title: "Fees Management", desc: "Collect fees, manage invoices and track payments easily.", icon: <IndianRupee size={20} /> },
    { title: "Communication", desc: "Send notices, alerts and messages to keep everyone informed.", icon: <MessageCircle size={20} /> }
  ];

  const transportFeatures = [
    { title: "Real-time vehicle tracking", desc: "Track all your vehicles live and stay in control.", icon: <Truck size={20} /> },
    { title: "Trip & booking management", desc: "Manage trips, bookings, schedules and assignments easily.", icon: <Calendar size={20} /> },
    { title: "Driver management", desc: "Manage driver details, licenses, documents and performance.", icon: <Users size={20} /> },
    { title: "Fuel & expense tracking", desc: "Monitor fuel consumption and other expenses accurately.", icon: <Fuel size={20} /> },
    { title: "Maintenance management", desc: "Schedule maintenance and get alerts for due services.", icon: <Wrench size={20} /> },
    { title: "Reports & analytics", desc: "Get actionable insights and make data-driven decisions.", icon: <BarChart2 size={20} /> }
  ];

  const gymFeatures = [
    { title: "Member Management", desc: "Register members, manage profiles, memberships, and renewal history.", icon: <Users size={20} /> },
    { title: "Class & Session Booking", desc: "Allow members to book fitness classes and personal training sessions online.", icon: <Calendar size={20} /> },
    { title: "Membership & Payment Tracking", desc: "Track membership plans, renewals, online payments, and invoices.", icon: <CreditCard size={20} /> },
    { title: "Trainer Management", desc: "Manage trainer schedules, availability, performance, and assigned members.", icon: <Users size={20} /> },
    { title: "Attendance & Reports", desc: "Monitor member check-ins, attendance trends, and business performance with real-time analytics.", icon: <BarChart2 size={20} /> }
  ];

  if (productType === 'transport') {
    return (
      <div className="home-container">
        <Navbar />

        <main className="rb-hero-section transport-hero-section">
          {/* Background graphics */}
          <div className="transport-shape transport-shape-1"></div>
          <div className="transport-shape transport-shape-2"></div>
          <div className="transport-shape transport-shape-3"></div>
          <div className="transport-shape transport-shape-4"></div>

          <div className="rb-content-wrapper">
            <div className="rb-text-content">
              <span className="transport-pretitle">SMART TRANSPORT MANAGEMENT</span>

              <h1 className="rb-title transport-title">
                Optimize fleet operations,<br />
                logistics, and transportation<br />
                with one intelligent ERP platform.
              </h1>

              <p className="rb-subtitle transport-subtitle">
                Our Transport ERP helps transport companies manage fleets, drivers, routes, bookings, vehicle maintenance, and financial operations from a centralized system. Improve efficiency, reduce operational costs, and deliver reliable transportation services with real-time visibility.
              </p>

              <ul className="rb-features-list">
                {transportFeatures.map((feature, i) => (
                  <li key={i} className="rb-feature-item transport-feature-item">
                    <div className="rb-feature-icon-wrapper transport-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="rb-feature-text">
                      <h3 className="rb-feature-title transport-feature-title">{feature.title}</h3>
                      <p className="rb-feature-desc transport-feature-desc">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '4rem' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn transport-contact-btn">
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rb-image-content">
              <img
                src="/Transport.png"
                alt="Transport ERP"
                className="rb-hero-image transport-hero-image"
              />
            </div>
          </div>
        </main>

        <section className="new-rb-layout">
          <div className="new-rb-layout-text-container">
            <h2 className="new-rb-layout-heading">Smarter transport operations</h2>
            <p className="new-rb-layout-paragraph">
              More efficient fleet and logistics management. This system helps your team manage vehicles, drivers, routes, bookings, and maintenance while improving operational efficiency and reducing transportation costs.
            </p>
          </div>
          <div className="new-rb-split-cards">
            {/* Left Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Core capabilities</h2>
              <ul className="new-rb-cap-list">
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Fleet & Vehicle Management</h3>
                    <p>Manage vehicles, registrations, insurance, permits, and maintenance schedules from a single dashboard.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Trip & Route Management</h3>
                    <p>Plan routes, assign trips, optimize travel schedules, and monitor vehicle movement with real-time tracking.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Driver & Staff Management</h3>
                    <p>Maintain driver profiles, licenses, attendance, payroll, duty assignments, and performance records efficiently.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Booking & Dispatch Management</h3>
                    <p>Handle transport bookings, dispatch vehicles, generate invoices, and track deliveries with complete accuracy.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Fuel & Maintenance Tracking</h3>
                    <p>Monitor fuel consumption, maintenance history, service reminders, repair costs, and vehicle performance to reduce operating expenses.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Reports & Business Analytics</h3>
                    <p>Generate detailed reports on fleet utilization, trip history, revenue, expenses, fuel efficiency, and operational performance.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Who this suits</h2>
              <ul className="new-rb-suit-list">
                <li><span className="new-rb-arrow">➔</span> Transport & Logistics Companies</li>
                <li><span className="new-rb-arrow">➔</span> School & College Transport</li>
                <li><span className="new-rb-arrow">➔</span> Bus Operators</li>
                <li><span className="new-rb-arrow">➔</span> Cargo & Freight Services</li>
                <li><span className="new-rb-arrow">➔</span> Fleet Management Companies</li>
                <li><span className="new-rb-arrow">➔</span> Courier & Delivery Services</li>
              </ul>
            </div>
          </div>

          <div className="new-rb-explore">
            <div className="new-rb-explore-header">
              <h2 className="new-rb-explore-heading">EXPLORE NEXT</h2>
              <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
            </div>
            <div className="new-rb-related-grid">
              <div className="new-rb-related-card">
                <h3>Fleet Management System</h3>
                <p>Monitor vehicles, maintenance schedules, insurance, permits, and fleet performance from one platform.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>GPS Vehicle Tracking</h3>
                <p>Track vehicle locations, routes, driver activity, and trip progress with real-time GPS monitoring.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Fuel Management</h3>
                <p>Record fuel purchases, monitor consumption, control fuel costs, and improve vehicle efficiency.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Driver Management</h3>
                <p>Manage driver profiles, licenses, attendance, payroll, duty schedules, and performance evaluations.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Booking & Dispatch System</h3>
                <p>Automate transport bookings, dispatch planning, customer notifications, and trip scheduling.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Transport Analytics Dashboard</h3>
                <p>Analyze fleet utilization, operational costs, revenue, delivery performance, and business growth through interactive dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (productType === 'school') {
    return (
      <div className="home-container">
        <Navbar />

        <main className="rb-hero-section school-hero-section">
          {/* Background graphics */}
          <div className="school-shape school-shape-1"></div>
          <div className="school-shape school-shape-2"></div>
          <div className="school-shape school-shape-3"></div>
          <div className="school-shape school-shape-4"></div>

          <div className="rb-content-wrapper">
            <div className="rb-text-content">
              <span className="school-pretitle">SMART EDUCATION ERP</span>

              <h1 className="rb-title school-title">
                Streamline every academic<br />
                and administrative operation<br />
                with one intelligent ERP platform.
              </h1>

              <p className="rb-subtitle school-subtitle">
                Our School & College ERP simplifies admissions, academics, attendance, examinations, finance, and communication through a centralized system. Empower administrators, teachers, students, and parents with real-time access to information anytime, anywhere.
              </p>

              <ul className="rb-features-list">
                {schoolFeatures.map((feature, i) => (
                  <li key={i} className="rb-feature-item school-feature-item">
                    <div className="rb-feature-icon-wrapper school-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="rb-feature-text">
                      <h3 className="rb-feature-title school-feature-title">{feature.title}</h3>
                      <p className="rb-feature-desc school-feature-desc">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '4rem' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn school-contact-btn">
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rb-image-content">
              <img
                src="/school.png"
                alt="School & College ERP"
                className="rb-hero-image school-hero-image"
              />
            </div>
          </div>
        </main>

        <section className="new-rb-layout">
          <div className="new-rb-layout-text-container">
            <h2 className="new-rb-layout-heading">School & College ERP</h2>
            <p className="new-rb-layout-paragraph">
              More efficient academic and administrative operations. This ERP helps your institution manage admissions, attendance, examinations, fees, and communication through one centralized platform for students, staff, and parents.
            </p>
          </div>
          <div className="new-rb-split-cards">
            {/* Left Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Core capabilities</h2>
              <ul className="new-rb-cap-list">
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Student Admission & Enrollment</h3>
                    <p>Manage online admissions, student registrations, document verification, and enrollment with a streamlined digital process.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Attendance & Academic Management</h3>
                    <p>Track student and staff attendance, manage timetables, class schedules, assignments, and daily academic activities.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Examination & Results</h3>
                    <p>Conduct examinations, generate report cards, calculate grades, and publish results with complete accuracy.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Fees & Finance Management</h3>
                    <p>Automate fee collection, online payments, receipts, scholarships, fines, and financial reporting from a single dashboard.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Parent, Student & Staff Portal</h3>
                    <p>Provide secure portals for parents, students, teachers, and administrators with instant access to attendance, results, notices, and academic records.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Reports & Analytics</h3>
                    <p>Generate detailed reports on admissions, attendance, examinations, finances, and institutional performance to support informed decision-making.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Who this suits</h2>
              <ul className="new-rb-suit-list">
                <li><span className="new-rb-arrow">➔</span> Schools (Primary & Secondary)</li>
                <li><span className="new-rb-arrow">➔</span> Colleges & Universities</li>
                <li><span className="new-rb-arrow">➔</span> Educational Institutions</li>
                <li><span className="new-rb-arrow">➔</span> Coaching & Training Centers</li>
                <li><span className="new-rb-arrow">➔</span> Residential Schools & Hostels</li>
                <li><span className="new-rb-arrow">➔</span> Multi-Campus Education Groups</li>
              </ul>
            </div>
          </div>

          <div className="new-rb-explore">
            <div className="new-rb-explore-header">
              <h2 className="new-rb-explore-heading">EXPLORE NEXT</h2>
              <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
            </div>
            <div className="new-rb-related-grid">
              <div className="new-rb-related-card">
                <h3>Student Information System</h3>
                <p>Manage student profiles, academic records, attendance history, and personal information in one secure platform.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Online Admission Management</h3>
                <p>Simplify admission applications, document verification, merit lists, and enrollment workflows.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Examination & Result Management</h3>
                <p>Create exam schedules, manage assessments, calculate grades, and publish report cards online.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Library Management System</h3>
                <p>Track books, issue and return records, digital catalogs, and overdue notifications efficiently.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Transport & Hostel Management</h3>
                <p>Manage bus routes, vehicle tracking, hostel rooms, student allocations, and transportation schedules.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Finance & Payroll Management</h3>
                <p>Automate fee collection, payroll processing, accounting, budgeting, and financial reporting with complete transparency.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (productType === 'pms') {
    return (
      <div className="home-container">
        <Navbar />

        <main className="rb-hero-section pms-hero-section">
          {/* Background graphics */}
          <div className="pms-dots pms-dots-1"></div>
          <div className="pms-dots pms-dots-2"></div>
          <div className="rb-shape pms-shape-1"></div>
          <div className="rb-shape pms-shape-2"></div>

          <div className="rb-content-wrapper">
            <div className="rb-text-content">
              <span className="pms-pretitle">SMART PROPERTY MANAGEMENT</span>

              <h1 className="rb-title pms-title">
                Manage properties,<br />
                tenants, and operations<br />
                from one intelligent platform.
              </h1>

              <p className="rb-subtitle pms-subtitle">
                Our Property Management System simplifies residential and commercial property operations by streamlining tenant management, rent collection, maintenance requests, and financial reporting. Improve efficiency, reduce manual work, and grow your property business with confidence.
              </p>

              <ul className="rb-feature-list pms-feature-list">
                {pmsFeatures.map((feature, idx) => (
                  <li key={idx} className="rb-feature-item pms-feature-item">
                    <div className="rb-feature-icon-wrapper pms-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="pms-feature-text-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="pms-feature-title">{feature.title}</span>
                      <span className="pms-feature-desc">{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn pms-contact-btn">
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rb-image-content">
              <img
                src="/laptop.png"
                alt="Property Management System"
                className="rb-hero-image pms-hero-image"
              />
            </div>
          </div>
        </main>

        <section className="new-rb-layout">
          <div className="new-rb-layout-text-container">
            <h2 className="new-rb-layout-heading">Simplified property management</h2>
            <p className="new-rb-layout-paragraph">
              More efficient property operations from a single platform. This solution helps your team manage properties, tenants, rent collection, maintenance requests, and financial records while improving productivity and tenant satisfaction.
            </p>
          </div>
          <div className="new-rb-split-cards">
            {/* Left Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Core capabilities</h2>
              <ul className="new-rb-cap-list">
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Property & Unit Management</h3>
                    <p>Manage multiple properties, buildings, floors, and units from a centralized dashboard with complete visibility.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Tenant & Lease Management</h3>
                    <p>Store tenant records, manage lease agreements, renewals, move-ins, move-outs, and occupancy history.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Rent Collection & Invoicing</h3>
                    <p>Generate recurring rent invoices, track payments, send reminders, and manage outstanding balances automatically.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Maintenance & Service Requests</h3>
                    <p>Allow tenants to submit maintenance requests and assign work orders to staff with real-time status tracking.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Financial Reports & Analytics</h3>
                    <p>Monitor rental income, expenses, occupancy rates, and property performance with detailed reports and dashboards.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Secure Document Management</h3>
                    <p>Store lease agreements, property documents, invoices, and receipts securely with easy access anytime.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Who this suits</h2>
              <ul className="new-rb-suit-list">
                <li><span className="new-rb-arrow">➔</span> Residential Apartment Owners</li>
                <li><span className="new-rb-arrow">➔</span> Commercial Property Managers</li>
                <li><span className="new-rb-arrow">➔</span> Real Estate Companies</li>
                <li><span className="new-rb-arrow">➔</span> Property Management Agencies</li>
                <li><span className="new-rb-arrow">➔</span> Housing Societies & Communities</li>
                <li><span className="new-rb-arrow">➔</span> Multi-Property Investors</li>
              </ul>
            </div>
          </div>

          <div className="new-rb-explore">
            <div className="new-rb-explore-header">
              <h2 className="new-rb-explore-heading">EXPLORE NEXT</h2>
              <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
            </div>
            <div className="new-rb-related-grid">
              <div className="new-rb-related-card">
                <h3>Tenant Management</h3>
                <p>Maintain tenant profiles, lease history, communication records, and occupancy details in one place.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Rent & Billing Management</h3>
                <p>Automate rent collection, invoice generation, payment reminders, and receipt management.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Maintenance Management</h3>
                <p>Track maintenance requests, assign technicians, and monitor work order completion efficiently.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Visitor & Security Management</h3>
                <p>Manage visitor check-ins, staff access, vehicle records, and security monitoring for safer properties.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Accounting & Financial Reports</h3>
                <p>Track income, expenses, taxes, and financial performance with comprehensive accounting tools.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Property Owner Dashboard</h3>
                <p>View occupancy, rental income, maintenance updates, and business insights through an interactive dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (productType === 'miniapp') {
    return (
      <div className="home-container">
        <Navbar />

        <main className="rb-hero-section ma-hero-section">
          {/* Background graphics */}
          <div className="ma-dots ma-dots-1"></div>
          <div className="ma-dots ma-dots-2"></div>
          <div className="rb-shape ma-shape-1"></div>
          <div className="rb-shape ma-shape-2"></div>
          <svg className="ma-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '100%', height: '20vh' }}>
            <path fillOpacity="0.4" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fillOpacity="0.8" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,154.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          <div className="rb-content-wrapper">
            <div className="rb-text-content">
              <span className="rb-pretitle ma-pretitle">MOBILE RESTAURANT POS</span>

              <h1 className="rb-title ma-title">
                Manage your restaurant<br />
                anytime, anywhere with a<br />
                <span className="ma-title-highlight">powerful POS Mini App.</span>
              </h1>

              <p className="rb-subtitle ma-subtitle">
                The POS Restaurant Mini App empowers restaurant owners and staff to manage orders, billing, payments, and business performance directly from their mobile devices. Stay connected to your restaurant operations in real time, whether you're on-site or on the go.
              </p>

              <ul className="rb-feature-list ma-feature-list">
                {miniappFeatures.map((feature, idx) => (
                  <li key={idx} className="rb-feature-item ma-feature-item">
                    <div className="rb-feature-icon-wrapper ma-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="ma-feature-text-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="ma-feature-title">{feature.title}</span>
                      <span className="ma-feature-desc">{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn ma-contact-btn">
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rb-image-content">
              <img
                src="/phone.png"
                alt="POS Mini App on Phone"
                className="rb-hero-image ma-hero-image"
              />
            </div>
          </div>
        </main>

        <section className="new-rb-layout">
          <div className="new-rb-layout-text-container">
            <h2 className="new-rb-layout-heading">Mobile restaurant management</h2>
            <p className="new-rb-layout-paragraph">
              More control over restaurant operations from anywhere. This mobile app helps your team manage orders, billing, payments, and daily sales in real time, improving service speed and delivering a seamless dining experience.
            </p>
          </div>
          <div className="new-rb-split-cards">
            {/* Left Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Core capabilities</h2>
              <ul className="new-rb-cap-list">
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Mobile Order Management</h3>
                    <p>Create, update, and track dine-in, takeaway, and delivery orders directly from your smartphone.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Instant POS Billing</h3>
                    <p>Generate digital bills quickly with automatic tax calculations, discounts, and receipt sharing.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Real-Time Kitchen Updates</h3>
                    <p>Send customer orders instantly to the kitchen and monitor preparation status in real time.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Secure Digital Payments</h3>
                    <p>Accept UPI, credit/debit cards, wallets, cash, and QR code payments with complete transaction tracking.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Sales & Business Dashboard</h3>
                    <p>Monitor daily sales, popular menu items, customer traffic, and revenue with live analytics.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Remote Restaurant Control</h3>
                    <p>Manage menus, pricing, staff activities, and restaurant performance from anywhere using a single mobile app.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Who this suits</h2>
              <ul className="new-rb-suit-list">
                <li><span className="new-rb-arrow">➔</span> Restaurants & Cafés</li>
                <li><span className="new-rb-arrow">➔</span> Fast Food Chains</li>
                <li><span className="new-rb-arrow">➔</span> Cloud Kitchens</li>
                <li><span className="new-rb-arrow">➔</span> Food Trucks</li>
                <li><span className="new-rb-arrow">➔</span> Bakery & Dessert Shops</li>
                <li><span className="new-rb-arrow">➔</span> Multi-Branch Restaurant Owners</li>
              </ul>
            </div>
          </div>

          <div className="new-rb-explore">
            <div className="new-rb-explore-header">
              <h2 className="new-rb-explore-heading">EXPLORE NEXT</h2>
              <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
            </div>
            <div className="new-rb-related-grid">
              <div className="new-rb-related-card">
                <h3>Restaurant Billing System</h3>
                <p>Fast, accurate billing with GST, discounts, and multiple payment options.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Kitchen Display System (KDS)</h3>
                <p>Receive orders digitally and improve kitchen efficiency with real-time updates.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Online Food Ordering</h3>
                <p>Accept customer orders directly from your website and mobile application.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Restaurant Inventory Management</h3>
                <p>Track ingredients, stock levels, and reduce food wastage automatically.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Customer Loyalty & Rewards</h3>
                <p>Increase repeat business with membership programs, coupons, and reward points.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Restaurant Analytics Dashboard</h3>
                <p>Analyze sales, peak business hours, staff performance, and business growth through interactive reports.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (productType === 'wholesale') {
    return (
      <div className="home-container">
        <Navbar />

        <main className="rb-hero-section wb-hero-section">
          {/* Background graphics */}
          <div className="wb-dots wb-dots-1"></div>
          <div className="wb-dots wb-dots-2"></div>
          <div className="rb-shape wb-shape-1"></div>
          <div className="rb-shape wb-shape-2"></div>
          <svg className="wb-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '100%', height: '20vh' }}>
            <path fillOpacity="0.1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fillOpacity="0.2" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,154.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          <div className="rb-content-wrapper">
            <div className="rb-text-content">
              <span className="rb-pretitle wb-pretitle">SMART RETAIL MANAGEMENT</span>

              <h1 className="rb-title wb-title">
                Simplify wholesale, retail,<br />and POS operations<br />
                <span className="wb-title-highlight">with one powerful platform.</span>
              </h1>

              <p className="rb-subtitle wb-subtitle">
                Our Wholesale • Retail • POS Software helps businesses streamline billing, inventory, sales, and customer management from a single dashboard. Increase efficiency, reduce errors, and deliver a faster checkout experience.
              </p>

              <ul className="rb-feature-list wb-feature-list">
                {wholesaleFeatures.map((feature, idx) => (
                  <li key={idx} className="rb-feature-item wb-feature-item">
                    <div className="rb-feature-icon-wrapper wb-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="wb-feature-text-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="wb-feature-title">{feature.title}</span>
                      <span className="wb-feature-desc">{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn wb-contact-btn">
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rb-image-content">
              <img
                src="/wholsale_hero.png"
                alt="Man holding tablet with POS dashboard"
                className="rb-hero-image"
              />
            </div>
          </div>
        </main>

        <section className="new-rb-layout" style={{ paddingTop: '2rem' }}>
          <div className="new-rb-layout-text-container" style={{ marginTop: '-1rem' }}>
            <h2 className="new-rb-layout-heading">Smarter retail operations</h2>
            <p className="new-rb-layout-paragraph">
              More sales through faster billing and streamlined inventory management. This solution helps your team process transactions quickly, manage stock in real time, serve customers efficiently, and grow your business with a seamless wholesale, retail, and POS experience.
            </p>
          </div>
          <div className="new-rb-split-cards">
            {/* Left Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Core capabilities</h2>
              <ul className="new-rb-cap-list">
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Fast POS Billing</h3>
                    <p>Generate invoices instantly with barcode scanning, discounts, taxes, and multiple payment methods.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Inventory & Stock Management</h3>
                    <p>Track stock levels in real time across warehouses and stores with automatic inventory updates.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Wholesale & Retail Pricing</h3>
                    <p>Manage separate pricing, discounts, and customer-specific rates for wholesale and retail sales.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Purchase & Supplier Management</h3>
                    <p>Create purchase orders, manage suppliers, and monitor incoming stock with complete transparency.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Customer & Loyalty Management</h3>
                    <p>Store customer information, reward loyal buyers, and increase repeat business through promotional offers.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Sales Reports & Business Analytics</h3>
                    <p>Access real-time dashboards, profit reports, sales trends, and inventory insights to make smarter business decisions.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Who this suits</h2>
              <ul className="new-rb-suit-list">
                <li>
                  <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                  <span>Wholesale Distributors</span>
                </li>
                <li>
                  <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                  <span>Retail Stores</span>
                </li>
                <li>
                  <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                  <span>Supermarkets & Hypermarkets</span>
                </li>
                <li>
                  <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                  <span>Electronics & Mobile Shops</span>
                </li>
                <li>
                  <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                  <span>Grocery & Department Stores</span>
                </li>
                <li>
                  <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                  <span>Fashion & Apparel Stores</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="new-rb-explore">
            <span className="new-rb-pretitle" style={{ color: '#0f766e' }}>EXPLORE NEXT</span>
            <div className="new-rb-explore-header">
              <h2 className="new-rb-card-heading">Related product pages</h2>
              <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
            </div>

            <div className="new-rb-related-grid">
              <div className="new-rb-related-card">
                <h3>Inventory Management</h3>
                <p>Track stock movement, warehouse inventory, and product availability in real time.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Barcode & Label Printing</h3>
                <p>Generate barcode labels and speed up billing with accurate product identification.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Purchase & Supplier Management</h3>
                <p>Manage vendors, purchase orders, stock receipts, and supplier payments efficiently.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Customer Loyalty Program</h3>
                <p>Increase customer retention with reward points, coupons, memberships, and promotional campaigns.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Accounting & GST Management</h3>
                <p>Automatically calculate GST, manage financial transactions, and generate tax-compliant reports.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Business Analytics Dashboard</h3>
                <p>Monitor sales performance, top-selling products, inventory value, and profit margins with interactive dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (productType === 'gym') {
    return (
      <div className="home-container">
        <Navbar />

        <main className="rb-hero-section gym-hero-section">
          <div className="rb-content-wrapper">
            <div className="rb-text-content">
              <span className="gym-pretitle">GYM BOOKING SYSTEM</span>

              <h1 className="rb-title gym-title">
                Smarter Gym Booking<br />
                for Better Fitness<br />
                Management.
              </h1>

              <p className="rb-subtitle gym-subtitle">
                Manage memberships, trainers, class schedules, payments, and attendance from one powerful platform. Save time, improve member experience, and grow your fitness business.
              </p>

              <ul className="rb-features-list gym-features-list">
                {gymFeatures.map((feature, i) => (
                  <li key={i} className="rb-feature-item gym-feature-item">
                    <div className="rb-feature-icon-wrapper gym-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="rb-feature-text">
                      <h3 className="rb-feature-title gym-feature-title">{feature.title}</h3>
                      <p className="rb-feature-desc gym-feature-desc">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn gym-contact-btn">
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rb-image-content">
              <img
                src="/gym.png"
                alt="Gym Booking System"
                className="rb-hero-image gym-hero-image"
              />
            </div>
          </div>
        </main>

        <section className="new-rb-layout">
          <div className="new-rb-layout-text-container">
            <h2 className="new-rb-layout-heading">Simplified fitness management</h2>
            <p className="new-rb-layout-paragraph">
              More memberships and hassle-free booking experiences. This platform helps your gym manage member registrations, class bookings, trainer schedules, payments, and attendance while delivering a seamless fitness experience for every member.
            </p>
          </div>
          <div className="new-rb-split-cards">
            {/* Left Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Core capabilities</h2>
              <ul className="new-rb-cap-list">
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Online Membership Registration</h3>
                    <p>Allow members to register, choose membership plans, upload documents, and complete enrollments online with ease.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Class & Trainer Booking</h3>
                    <p>Enable members to book gym sessions, personal training, group fitness classes, and wellness programs in real time.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Attendance & Access Management</h3>
                    <p>Track member check-ins, attendance history, and facility access using QR codes, biometric devices, or membership cards.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Membership & Payment Management</h3>
                    <p>Manage membership plans, renewals, online payments, invoices, discounts, and automated renewal reminders.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Trainer & Schedule Management</h3>
                    <p>Organize trainer profiles, availability, workout schedules, and appointment bookings through a centralized dashboard.</p>
                  </div>
                </li>
                <li>
                  <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <h3>Reports & Performance Analytics</h3>
                    <p>Monitor memberships, revenue, attendance, class occupancy, trainer performance, and business growth with comprehensive reports.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="new-rb-card">
              <h2 className="new-rb-card-heading">Who this suits</h2>
              <ul className="new-rb-suit-list">
                <li><span className="new-rb-arrow">➔</span> Fitness Centers</li>
                <li><span className="new-rb-arrow">➔</span> Gym Chains</li>
                <li><span className="new-rb-arrow">➔</span> Health Clubs</li>
                <li><span className="new-rb-arrow">➔</span> Yoga Studios</li>
                <li><span className="new-rb-arrow">➔</span> CrossFit & Functional Training Centers</li>
                <li><span className="new-rb-arrow">➔</span> Personal Training & Wellness Studios</li>
              </ul>
            </div>
          </div>

          <div className="new-rb-explore">
            <div className="new-rb-explore-header">
              <h2 className="new-rb-explore-heading">EXPLORE NEXT</h2>
              <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
            </div>
            <div className="new-rb-related-grid">
              <div className="new-rb-related-card">
                <h3>Membership Management</h3>
                <p>Manage member registrations, subscriptions, renewals, and membership history from one secure platform.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Class Booking System</h3>
                <p>Schedule fitness classes, control booking capacity, and manage cancellations with real-time availability.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Trainer Management</h3>
                <p>Assign trainers, manage appointments, monitor schedules, and track trainer performance efficiently.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Attendance & Access Control</h3>
                <p>Record member attendance and automate gym access using QR codes, RFID cards, or biometric integration.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Payment & Billing System</h3>
                <p>Accept online and offline payments, generate invoices, track dues, and automate renewal notifications.</p>
              </div>
              <div className="new-rb-related-card">
                <h3>Fitness Analytics Dashboard</h3>
                <p>Analyze membership growth, attendance trends, revenue, trainer utilization, and business performance through interactive dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="home-container">
      <Navbar />

      <main className="rb-hero-section" style={{ minHeight: '40vh', paddingBottom: '0' }}>
        <div className="rb-shape rb-shape-1"></div>
        <div className="rb-shape rb-shape-2"></div>
        <div className="rb-shape rb-shape-3"></div>
        <div className="rb-shape rb-shape-4"></div>

        <div className="rb-content-wrapper">
          <div className="rb-text-content">
            <span className="rb-pretitle">RESTAURANT BILLING SYSTEM</span>

            <h1 className="rb-title">
              Smart Billing.<br />
              Better Management.<br />
              Higher Profits.
            </h1>

            <p className="rb-subtitle">
              Streamline your restaurant operations with our all-in-one billing system. Manage orders, generate bills, track inventory, and analyze sales – all from a single powerful platform.
            </p>

            <ul className="rb-feature-list">
              {restaurantFeatures.map((feature, idx) => (
                <li key={idx} className="rb-feature-item">
                  <div className="rb-feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="rb-contact-btn">
              <MessageCircle size={18} />
              <span>Contact Us</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="rb-image-content">
            <img
              src="/girl_table.png"
              alt="Person holding tablet with restaurant dashboard"
              className="rb-hero-image"
            />
          </div>
        </div>
      </main>

      <section className="new-rb-layout" style={{ paddingTop: '2rem' }}>
        <div className="new-rb-layout-text-container" style={{ marginTop: '-1rem' }}>
          <h2 className="new-rb-layout-heading">Faster billing operations</h2>
          <p className="new-rb-layout-paragraph">
            Quick and accurate billing for dine-in, takeaway, and delivery orders. This solution helps your staff serve customers faster, reduce billing errors, streamline restaurant operations, and increase customer satisfaction with a seamless checkout experience.
          </p>
        </div>

        <div className="new-rb-split-cards">
          {/* Left Card */}
          <div className="new-rb-card">
            <h2 className="new-rb-card-heading">Core capabilities</h2>
            <ul className="new-rb-cap-list">
              <li>
                <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div>
                  <h3>Quick Order & Billing</h3>
                  <p>Generate customer bills instantly with accurate pricing, taxes, and discounts.</p>
                </div>
              </li>
              <li>
                <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div>
                  <h3>Table & Order Management</h3>
                  <p>Manage dine-in, takeaway, and delivery orders with real-time table status.</p>
                </div>
              </li>
              <li>
                <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div>
                  <h3>Menu & Inventory Integration</h3>
                  <p>Automatically update stock levels as menu items are sold, reducing inventory mistakes.</p>
                </div>
              </li>
              <li>
                <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div>
                  <h3>Multiple Payment Options</h3>
                  <p>Accept cash, card, UPI, wallets, and split payments with secure transaction tracking.</p>
                </div>
              </li>
              <li>
                <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div>
                  <h3>GST & Tax Calculation</h3>
                  <p>Automatically calculate GST, service charges, and print tax-compliant invoices.</p>
                </div>
              </li>
              <li>
                <div className="new-rb-icon-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div>
                  <h3>Sales Reports & Analytics</h3>
                  <p>View daily, weekly, and monthly sales reports to monitor restaurant performance.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="new-rb-card">
            <h2 className="new-rb-card-heading">Who this suits</h2>
            <ul className="new-rb-suit-list">
              <li>
                <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                <span>Restaurants & Cafes</span>
              </li>
              <li>
                <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                <span>Fast Food Chains</span>
              </li>
              <li>
                <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                <span>Fine Dining Restaurants</span>
              </li>
              <li>
                <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                <span>Cloud Kitchens</span>
              </li>
              <li>
                <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                <span>Food Courts</span>
              </li>
              <li>
                <div className="new-rb-icon-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                <span>Hotels with Restaurants</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="new-rb-explore">
          <span className="new-rb-pretitle">EXPLORE NEXT</span>
          <div className="new-rb-explore-header">
            <h2 className="new-rb-card-heading">Related product pages</h2>
            <button className="new-rb-demo-btn" onClick={() => window.location.href = '/contact'}>Request a Free Demo</button>
          </div>

          <div className="new-rb-related-grid">
            <div className="new-rb-related-card">
              <h3>POS Billing Software</h3>
              <p>Fast billing with barcode and receipt printing.</p>
            </div>
            <div className="new-rb-related-card">
              <h3>Restaurant Inventory Management</h3>
              <p>Track ingredients and reduce food wastage.</p>
            </div>
            <div className="new-rb-related-card">
              <h3>Kitchen Order Display System (KDS)</h3>
              <p>Send orders directly to the kitchen for faster preparation.</p>
            </div>
            <div className="new-rb-related-card">
              <h3>Restaurant CRM</h3>
              <p>Manage customer loyalty, offers, and feedback.</p>
            </div>
            <div className="new-rb-related-card">
              <h3>Online Food Ordering</h3>
              <p>Accept online orders from your website and mobile app.</p>
            </div>
            <div className="new-rb-related-card">
              <h3>Restaurant Analytics Dashboard</h3>
              <p>Monitor revenue, peak hours, and best-selling menu items.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
