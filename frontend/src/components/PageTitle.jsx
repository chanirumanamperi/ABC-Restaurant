import { useContext } from "react";
import { UniversalContext } from '../context/UniversalContext';

const PageTitle = () => {
  const { getValue } = useContext(UniversalContext);
  const userType = getValue("userType");

  return (
    <div style={{ padding: '20px 15px', borderBottom: '1px solid #e0e0e0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: '0', fontSize: '26px', fontWeight: '700', padding: '10px 0' }}>
          {getValue('PageName') ? getValue('PageName') : "Welcome!"}
        </h4>
        <div style={{ textAlign: 'right', padding: '10px 0' }}>
          <ol style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', gap: '5px' }}>
            <li>
              <a href="#" style={{ textDecoration: 'none' }}>ABC</a>
            </li>
            {userType !== undefined && (
              <>
                <li style={{ fontWeight: '500' }}> / </li>
                <li>
                  <a href="#" style={{ textDecoration: 'none' }}>Dashboards</a>
                </li>
              </>
            )}
            <li style={{ fontWeight: '500' }}> / </li>
            <li>
              {getValue('PageName') ? getValue('PageName') : "Welcome!"}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
