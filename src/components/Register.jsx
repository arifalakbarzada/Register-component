import './Register.css';
import submit from './submit';
export default function Register() {
    return (
        <div className="container">
            <form id="patientForm">
                <div className="form-group">
                    <label htmlFor="fullName">Tam Adı:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="idNumber">Vəsiqə Seriyası və Nömrəsi:</label>
                    <input type="text" id="idNumber" name="idNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Cinsi:</label>
                    <select id="gender" name="gender">
                        <option value="male">Kişi</option>
                        <option value="female">Qadın</option>
                        <option value="other">Digər</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Yaş:</label>
                    <input type="number" id="age" name="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Ünvanı:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefon Nömrəsi:</label>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="symptoms">Simptomların Təsviri:</label>
                    <textarea id="symptoms" name="symptoms" rows="4"></textarea>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="repeatVisit" name="repeatVisit" />
                    <label htmlFor="repeatVisit" className="checkbox">Təkrar Qəbul</label>
                </div>
                <button type="submit" className="btn" onClick={submit}>Göndər</button>
            </form>
        </div>
    )
}