import { useState, useContext,useEffect } from 'react';
import { UniversalContext } from '../context/UniversalContext';

const SummaryCard = () => {
  const { getValue } = useContext(UniversalContext);
  const [products, setProducts] = useState(0);
  const [services, setServices] = useState(0);
  const [offers, setOffers] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const productsData = getValue("products");
      const servicesData = getValue("services");
      const offersData = getValue("offers");
      const ordersData = getValue("orders");

      if (productsData) {
        setProducts(productsData.length);
      }
      if (servicesData) {
        setServices(servicesData.length);
      }
      if (offersData) {
        setOffers(offersData.length);
      }
      if (ordersData) {
        setOrders(ordersData.length);
      }
    };
    fetchData();
  }, [getValue("products"), getValue("services"), getValue("offers"), getValue("orders")]);

  return (
    <div className="row">
      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat text-bg-pink">
          <div className="card-body">
            <div className="float-end">
              <i className="ri-eye-line widget-icon" />
            </div>
            <h6 className="text-uppercase mt-0" title="Customers">
              Total Products
            </h6>
            <h2 className="my-2">{products}</h2>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat text-bg-purple">
          <div className="card-body">
            <div className="float-end">
              <i className="ri-wallet-2-line widget-icon" />
            </div>
            <h6 className="text-uppercase mt-0" title="Customers">
              Total Services
            </h6>
            <h2 className="my-2">{services}</h2>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat text-bg-info">
          <div className="card-body">
            <div className="float-end">
              <i className="ri-shopping-basket-line widget-icon" />
            </div>
            <h6 className="text-uppercase mt-0" title="Customers">
              Total Offers
            </h6>
            <h2 className="my-2">{offers}</h2>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat text-bg-primary">
          <div className="card-body">
            <div className="float-end">
              <i className="ri-file-list-2-line widget-icon" />
            </div>
            <h6 className="text-uppercase mt-0" title="Customers">
              Total Orders
            </h6>
            <h2 className="my-2">{orders}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;