import React, { useState } from "react";
import "./Dashboard.css";

const customers = [
  {
    id: 1,
    name: "Aayush Purja",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "aayush@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    id: 2,
    name: "Susma Chepang",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "susma@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Saroj Shrestha",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "saroj@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mithu Rai",
    company: "Tesla",
    phone: "(252) 555-0198",
    email: "mithu@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    id: 5,
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Canada",
    status: "Active",
  },
];

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);

  const customersPerPage = 5;

  /* =========================
     SEARCH + SORT
  ========================= */

  const filteredCustomers = customers
    .filter((customer) => {
      const text = search.toLowerCase();

      return (
        customer.name.toLowerCase().includes(text) ||
        customer.company.toLowerCase().includes(text) ||
        customer.email.toLowerCase().includes(text) ||
        customer.country.toLowerCase().includes(text)
      );
    })
    .sort((a, b) => {
      if (sort === "Name") {
        return a.name.localeCompare(b.name);
      }

      return b.id - a.id;
    });

  const totalPages = Math.ceil(
    filteredCustomers.length / customersPerPage
  );

  const startIndex = (page - 1) * customersPerPage;

  const currentCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + customersPerPage
  );

  /* =========================
     HANDLERS
  ========================= */

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setSearch("");
    setPage(1);
  };

  /* =========================
     CUSTOMER TABLE
  ========================= */

  const CustomerTable = () => {
    return (
      <>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentCustomers.length > 0 ? (
                currentCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.company}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.country}</td>
                    <td>
                      <span
                        className={
                          customer.status === "Active"
                            ? "status active-status"
                            : "status inactive-status"
                        }
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <p>
            Showing data{" "}
            {filteredCustomers.length === 0
              ? 0
              : startIndex + 1}{" "}
            to{" "}
            {Math.min(
              startIndex + customersPerPage,
              filteredCustomers.length
            )}{" "}
            of {filteredCustomers.length}
          </p>

          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ‹
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((number) => (
              <button
                key={number}
                className={
                  page === number
                    ? "page-number selected-page"
                    : "page-number"
                }
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}

            <button
              disabled={
                page === totalPages || totalPages === 0
              }
              onClick={() => setPage(page + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </>
    );
  };

  /* =========================
     DASHBOARD
  ========================= */

  const DashboardContent = () => {
    return (
      <>
        <section className="statistics">
          <div className="stat-card">
            <div className="stat-icon customers-icon">
              ♧
            </div>

            <div>
              <p>Total Customers</p>
              <h3>5,423</h3>
              <small className="positive">
                ↑ 16% this month
              </small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon members-icon">
              ♙
            </div>

            <div>
              <p>Members</p>
              <h3>1,893</h3>
              <small className="negative">
                ↓ 1% this month
              </small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon active-icon">
              ▣
            </div>

            <div>
              <p>Active Now</p>
              <h3>189</h3>

              <div className="mini-avatars">
                <span>👩</span>
                <span>👨</span>
                <span>👩</span>
                <span>👨</span>
              </div>
            </div>
          </div>
        </section>

        <section className="customer-box">
          <div className="customer-heading">
            <div>
              <h2>All Customers</h2>
              <p>Active Members</p>
            </div>

            <div className="customer-controls">
              <div className="customer-search">
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>

              <div className="sort-box">
                <label>Sort by:</label>

                <select
                  value={sort}
                  onChange={handleSort}
                >
                  <option value="Newest">Newest</option>
                  <option value="Name">Name</option>
                </select>
              </div>
            </div>
          </div>

          <CustomerTable />
        </section>
      </>
    );
  };

  /* =========================
     PHONE
  ========================= */

  const PhoneContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>📱 Phones</h1>
            <p>Manage all phone products</p>
          </div>

          <button className="primary-button">
            + Add Phone
          </button>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">📱</div>
            <h3>iPhone 16 Pro</h3>
            <p>Apple smartphone</p>

            <div className="product-bottom">
              <strong>$999</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">📱</div>
            <h3>Samsung Galaxy S25</h3>
            <p>Samsung smartphone</p>

            <div className="product-bottom">
              <strong>$899</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">📱</div>
            <h3>Google Pixel 9</h3>
            <p>Google smartphone</p>

            <div className="product-bottom">
              <strong>$799</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     LAPTOP
  ========================= */

  const LaptopContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>💻 Laptops</h1>
            <p>Manage all laptop products</p>
          </div>

          <button className="primary-button">
            + Add Laptop
          </button>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">💻</div>
            <h3>MacBook Pro</h3>
            <p>Apple professional laptop</p>

            <div className="product-bottom">
              <strong>$1,999</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">💻</div>
            <h3>Dell XPS 15</h3>
            <p>Dell professional laptop</p>

            <div className="product-bottom">
              <strong>$1,499</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">💻</div>
            <h3>HP Spectre</h3>
            <p>HP premium laptop</p>

            <div className="product-bottom">
              <strong>$1,299</strong>
              <span
                className="product-stock"
                style={{ color: "#df0000" }}
              >
                Out of Stock
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     CAMERA
  ========================= */

  const CameraContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>📷 Cameras</h1>
            <p>Manage all camera products</p>
          </div>

          <button className="primary-button">
            + Add Camera
          </button>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">📷</div>
            <h3>Canon EOS R6</h3>
            <p>Professional camera</p>

            <div className="product-bottom">
              <strong>$2,499</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">📷</div>
            <h3>Sony A7 IV</h3>
            <p>Sony mirrorless camera</p>

            <div className="product-bottom">
              <strong>$2,199</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">📷</div>
            <h3>Nikon Z6 II</h3>
            <p>Nikon mirrorless camera</p>

            <div className="product-bottom">
              <strong>$1,999</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     HEADPHONE
  ========================= */

  const HeadphoneContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>🎧 Headphones</h1>
            <p>Manage all headphone products</p>
          </div>

          <button className="primary-button">
            + Add Headphone
          </button>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">🎧</div>
            <h3>AirPods Pro</h3>
            <p>Apple wireless headphones</p>

            <div className="product-bottom">
              <strong>$249</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">🎧</div>
            <h3>Sony WH-1000XM5</h3>
            <p>Sony wireless headphones</p>

            <div className="product-bottom">
              <strong>$399</strong>
              <span className="product-stock">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">🎧</div>
            <h3>Bose QuietComfort</h3>
            <p>Bose noise cancelling headphones</p>

            <div className="product-bottom">
              <strong>$349</strong>
              <span
                className="product-stock"
                style={{ color: "#df0000" }}
              >
                Out of Stock
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     CUSTOMERS
  ========================= */

  const CustomersContent = () => {
    return (
      <section className="customer-box">
        <div className="customer-heading">
          <div>
            <h2>All Customers</h2>
            <p>Manage your customers</p>
          </div>

          <div className="customer-controls">
            <div className="customer-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
              />
            </div>

            <div className="sort-box">
              <label>Sort by:</label>

              <select
                value={sort}
                onChange={handleSort}
              >
                <option value="Newest">Newest</option>
                <option value="Name">Name</option>
              </select>
            </div>
          </div>
        </div>

        <CustomerTable />
      </section>
    );
  };

  /* =========================
     INCOME
  ========================= */

  const IncomeContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>Income</h1>
            <p>Track your business income</p>
          </div>
        </div>

        <div className="income-grid">
          <div className="income-card">
            <div className="income-icon">💰</div>

            <p>Total Income</p>
            <h2>$45,600</h2>

            <span className="positive">
              ↑ 12.5% this month
            </span>
          </div>

          <div className="income-card">
            <div className="income-icon">📈</div>

            <p>This Month</p>
            <h2>$8,420</h2>

            <span className="positive">
              ↑ 8.2% this month
            </span>
          </div>

          <div className="income-card">
            <div className="income-icon">📊</div>

            <p>Last Month</p>
            <h2>$7,180</h2>

            <span>July 2026</span>
          </div>
        </div>

        <div className="chart-box">
          <h2>Income Overview</h2>

          <div className="fake-chart">
            <div style={{ height: "40%" }}></div>
            <div style={{ height: "60%" }}></div>
            <div style={{ height: "45%" }}></div>
            <div style={{ height: "75%" }}></div>
            <div style={{ height: "55%" }}></div>
            <div style={{ height: "90%" }}></div>
            <div style={{ height: "70%" }}></div>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     PROMOTE
  ========================= */

  const PromoteContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>Promote</h1>
            <p>Create and manage your promotions</p>
          </div>

          <button className="primary-button">
            + Create Promotion
          </button>
        </div>

        <div className="promotion-grid">
          <div className="promotion-card">
            <div className="promotion-icon">🔥</div>

            <h2>Summer Sale</h2>

            <p>
              Get 20% discount on selected products.
            </p>

            <div className="promotion-info">
              <span>20% OFF</span>
              <small>Active</small>
            </div>

            <button>
              View Promotion
            </button>
          </div>

          <div className="promotion-card">
            <div className="promotion-icon">🎁</div>

            <h2>New Customer Offer</h2>

            <p>
              Special discount for new customers.
            </p>

            <div className="promotion-info">
              <span>15% OFF</span>
              <small>Active</small>
            </div>

            <button>
              View Promotion
            </button>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     HELP
  ========================= */

  const HelpContent = () => {
    return (
      <section className="content-page">
        <div className="page-header">
          <div>
            <h1>Help & Support</h1>
            <p>Find answers and get support</p>
          </div>
        </div>

        <div className="help-grid">
          <div className="help-card">
            <div className="help-icon">📖</div>

            <h3>Documentation</h3>

            <p>
              Read our documentation to learn
              more about the dashboard.
            </p>

            <button>
              Read Documentation
            </button>
          </div>

          <div className="help-card">
            <div className="help-icon">❓</div>

            <h3>FAQ</h3>

            <p>
              Find answers to frequently asked
              questions.
            </p>

            <button>
              View FAQ
            </button>
          </div>

          <div className="help-card">
            <div className="help-icon">💬</div>

            <h3>Contact Support</h3>

            <p>
              Need help? Contact our support team.
            </p>

            <button>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    );
  };

  /* =========================
     PAGE ROUTING
  ========================= */

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <DashboardContent />;

      case "Phone":
        return <PhoneContent />;

      case "Laptop":
        return <LaptopContent />;

      case "Camera":
        return <CameraContent />;

      case "Headphone":
        return <HeadphoneContent />;

      case "Customers":
        return <CustomersContent />;

      case "Income":
        return <IncomeContent />;

      case "Promote":
        return <PromoteContent />;

      case "Help":
        return <HelpContent />;

      default:
        return <DashboardContent />;
    }
  };

  /* =========================
     MAIN LAYOUT
  ========================= */

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* SIDEBAR */}

        <aside className="dashboard-sidebar">

          <div className="dashboard-title">
            <span className="gear-icon">⚙</span>
            <span>Sajilo Shopping</span>
          </div>

          <div className="sidebar-menu">

            {/* DASHBOARD */}

            <button
              className={
                activeMenu === "Dashboard"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Dashboard")
              }
            >
              <span>▣</span>
              <span>Dashboard</span>
            </button>

            {/* PHONE */}

            <button
              className={
                activeMenu === "Phone"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Phone")
              }
            >
              <span>📱</span>
              <span>Phone</span>
              <span className="arrow">›</span>
            </button>

            {/* LAPTOP */}

            <button
              className={
                activeMenu === "Laptop"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Laptop")
              }
            >
              <span>💻</span>
              <span>Laptop</span>
              <span className="arrow">›</span>
            </button>

            {/* CAMERA */}

            <button
              className={
                activeMenu === "Camera"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Camera")
              }
            >
              <span>📷</span>
              <span>Camera</span>
              <span className="arrow">›</span>
            </button>

            {/* HEADPHONE */}

            <button
              className={
                activeMenu === "Headphone"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Headphone")
              }
            >
              <span>🎧</span>
              <span>Headphone</span>
              <span className="arrow">›</span>
            </button>

            {/* CUSTOMERS */}

            <button
              className={
                activeMenu === "Customers"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Customers")
              }
            >
              <span>♙</span>
              <span>Customers</span>
              <span className="arrow">›</span>
            </button>

            {/* INCOME */}

            <button
              className={
                activeMenu === "Income"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Income")
              }
            >
              <span>◉</span>
              <span>Income</span>
              <span className="arrow">›</span>
            </button>

            {/* PROMOTE */}

            <button
              className={
                activeMenu === "Promote"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Promote")
              }
            >
              <span>◇</span>
              <span>Promote</span>
              <span className="arrow">›</span>
            </button>

            {/* HELP */}

            <button
              className={
                activeMenu === "Help"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() =>
                handleMenuClick("Help")
              }
            >
              <span>?</span>
              <span>Help</span>
              <span className="arrow">›</span>
            </button>

          </div>
        </aside>

        {/* MAIN CONTENT */}

        <main className="dashboard-main">

          <header className="dashboard-header">

            <div>
              <h2>
                {activeMenu === "Dashboard"
                  ? "Hello Sajilo Shopping 👋,"
                  : activeMenu}
              </h2>

              {activeMenu !== "Dashboard" && (
                <p className="header-subtitle">
                  Manage your{" "}
                  {activeMenu.toLowerCase()} here
                </p>
              )}
            </div>

            <div className="top-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
              />
            </div>

          </header>

          {renderContent()}

        </main>
      </div>
    </div>
  );
}

export default Dashboard;