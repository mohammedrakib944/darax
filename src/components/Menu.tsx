import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="sticky top-[70px] shadow-sm">
      <ul className="menu bg-white w-56 rounded-lg">
        <li>
          <details open>
            <summary>Smart Phones</summary>
            <ul>
              <li>
                <a>Samsung</a>
              </li>
              <li>
                <a>Apple</a>
              </li>
              <li>
                <a>Xiaomi</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Shirt</summary>
            <ul>
              <li>
                <a>Mens</a>
              </li>
              <li>
                <a>Womens</a>
              </li>
              <li>
                <details>
                  <summary>T-shirt</summary>
                  <ul>
                    <li>
                      <a>Mens</a>
                    </li>
                    <li>
                      <a>Womans</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Shoes</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
