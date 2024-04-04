import React, { useState } from 'react';
import './App.css';

function App() {
    const [angka1, setAngka1] = useState('');
    const [angka2, setAngka2] = useState('');
    const [operasi, setOperasi] = useState('+');
    const [hasil, setHasil] = useState('');
    const [error, setError] = useState('');

    const hitungHasil = () => {
    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    if (isNaN(num1) || isNaN(num2)) {
    setError('Masukkan angka yang valid');
    return;
    }
    let result;
    switch (operasi) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
        setError('Pembagian oleh nol tidak diperbolehkan');
        return;
        }
        result = num1 / num2;
        break;
    default:
        result = '';
    }

    setHasil(result.toFixed(2));
    setError('');
};

    return (
    <div className="container">
    <h2>Kalkulator</h2>
    <div className="input-field">
        <input
        type="number"
        id="angka1"
        value={angka1}
        onChange={(e) => {
            setAngka1(e.target.value);
            setError('');
        }}
        placeholder="Masukkan angka pertama"
        />
        <select
        id="operasi"
        value={operasi}
        onChange={(e) => {
            setOperasi(e.target.value);
            setError('');
        }}
        >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        </select>
        <input
        type="number"
        id="angka2"
        value={angka2}
        onChange={(e) => {
            setAngka2(e.target.value);
            setError('');
        }}
        placeholder="Masukkan angka kedua"
        />
    </div>
    <button id="hitung" onClick={hitungHasil}>
        Hitung
    </button>
    <div id="hasil">
        {error && <p className="error">{error}</p>}
        {hasil && (
        <p>
            Hasil: <span>{hasil}</span>
        </p>
        )}
    </div>
    </div>
);
}

export default App;
