import './footer.css';

export default function Footer({ }) {
    return (
        <footer className="flex flex-col justify-center items-center p-2 bg-brand">
            <div className="flex flex-wrap gap-3 font-normal text-white justify-center items-center">
                <a href="#">Datenschutz</a>
                <a href="#">Impressum</a>
            </div>
            <span className="text-white font-bold">&copy; I2a 2023</span>
        </footer>
    )
}