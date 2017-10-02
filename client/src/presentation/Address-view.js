import React from 'react';

function Address (props) {
  const {
    name,
    addressLine1,
    addressLine2,
    addressCity,
    addressState,
    addressZip,
    wordCount,
    onChange,
    onClick,
  } = props;
  return (
    <div>
      <form>
        <p>*Name: 
          <input 
            type="text"
            placeholder="Joe Schmoe"
            name="name"
            value={name}
            onChange={(e) => onChange(e, 'name')}
            required
          />
        </p>
        <p>*Address Line 1: 
          <input 
            type="text"
            placeholder="185 Berry Street"
            name="addressLine1"
            value={addressLine1}
            onChange={(e) => onChange(e, 'addressLine1')}
            required
          />
        </p>
        <p>Address Line 2: 
          <input 
            type="text"
            placeholder="Suite 170"
            value={addressLine2}
            onChange={(e) => onChange(e, 'addressLine2')}
            name="addressLine2"
          />
        </p>
        <p>*City: 
          <input 
            type="text"
            placeholder="San Francisco"
            name="city"
            value={addressCity}
            onChange={(e) => onChange(e, 'addressCity')}
            required
          />
        </p>
        <p>*State: 
          <input 
            type="text"
            placeholder="CA"
            name="state"
            value={addressState}
            onChange={(e) => onChange(e, 'addressState')}
            required
          />
        </p>
        <p>*Zip Code: 
          <input 
            type="number"
            placeholder="94107"
            name="zipCode"
            value={addressZip}
            onChange={(e) => onChange(e, 'addressZip')}
            required
          />
        </p>
        <p>*Message:</p>
        <textarea 
          placeholder="Hello Mr.President, ...."
          onChange={(e) => onChange(e, 'message')}
          rows={10}
          cols={65}
          required
        />
        <p>WordCount: {wordCount}/200</p>
        <br/>
        <input type="submit" value="submit" onClick={(e) => onClick(e)}/>
      </form>
    </div>
  );
}

export default Address;