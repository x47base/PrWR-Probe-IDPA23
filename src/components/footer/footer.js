import './footer.css';

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center p-2 bg-header dark:bg-dark-header">
            <div className="flex flex-wrap gap-3 font-normal text-textLight dark:text-textDark justify-center items-center">
                <a href="/">Datenschutz</a>
                <a href="/">Impressum</a>
            </div>
            <span className="text-textLight dark:text-textDark font-bold">&copy; I2a 2023</span>
        </footer>
    )
}