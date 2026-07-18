import Header from "../components/Common/Header/Header";
import Page from "../components/Common/Page/Page";
import Card from "../components/Common/Card/Card";
import Button from "../components/Common/Button/Button";

export default function HomePage(){

    return(

        <Page>

            <Header/>

            <Card>

                <h2>📖 Chants</h2>

                <br/>

                <p>Aucun chant disponible.</p>

                <br/>

                <Button title="Voir les chants"/>

            </Card>

            <Card>

                <h2>📅 Programmes</h2>

                <br/>

                <p>Aucun programme disponible.</p>

                <br/>

                <Button title="Voir les programmes"/>

            </Card>

            <p
                style={{
                    textAlign:"center",
                    color:"#777"
                }}
            >

                Version 0.1.0

            </p>

        </Page>

    )

}