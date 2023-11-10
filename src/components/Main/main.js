import './main.css';

/* Icons */
import { BsFillSunFill } from "react-icons/bs";

/* Other Components */
import BuildIcon from '../Icon/icon';

export default function Main({ }){
    return (
        <main className="w-full p-2">
            <section>

                <div className="min-h-fit">
                    <BuildIcon icon={<BsFillSunFill size="28" />} classes="w-8 text-black" />
                </div>

            </section>
        </main>
    );
}