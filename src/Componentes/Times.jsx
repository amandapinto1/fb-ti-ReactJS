import ERP from "./Times/ERP";
import Gerencia from "./Times/Gerencia";
import Internet from "./Times/Internet"
import Operacao from "./Times/Operacao";
import Sistemas from "./Times/Sistemas";
import Suporte from "./Times/Suporte";

import FBVest from "./Times/FBVest";

const Times = () => {
    return (
        <main>
    <section className="geral">
        <Gerencia/>
        <ERP/>
        <Internet/>
        <Operacao/>
        <Sistemas/>
        <Suporte/>
        <FBVest/>
        </section>
        </main>
        )
}

export default Times;