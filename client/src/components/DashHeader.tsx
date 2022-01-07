import React, { ReactElement } from 'react';
import { Button, Image, InputGroup, FormControl } from 'react-bootstrap';
import '../styles/DashHeader.css';
interface Props {}

export default function DashHeader({}: Props): ReactElement {
  return (
    <div className="header-dashboard">
      <div className="header-button-container">
        <Button
          className="header-history-button"
          as="input"
          type="button"
          value="<"
          style={{
            height: '35px',
            borderRadius: '20px',
            backgroundColor: '#212529',
            borderColor: '#212529',
          }}
        />
        <Button
          className="header-history-button2"
          as="input"
          type="button"
          value=">"
          style={{
            height: '35px',
            borderRadius: '20px',
            backgroundColor: '#212529',
            borderColor: '#212529',
          }}
        />
      </div>

      <div className="header-userinfo-container"></div>
    </div>
  );
}
