import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet } from "react-native";
import "../index.css"
import { useState } from "react";

enum STEPFORM {
    unclicado = 1,
    clicado = 2,
}

enum MODAL {
    NONE = 0,
    CALENDAR = 1,
    GUEST = 2,
}



export default function Home() {
    const [stepForm, setStepForm] = useState(STEPFORM.unclicado)
    const [showModal, setShowModal] = useState(MODAL.NONE)

    function handleCickedStepForm() {
        if (stepForm === STEPFORM.unclicado) {
            return setStepForm(STEPFORM.clicado)
            console.log("Clicado")
        }
    }
    return (
        <>
            <div className="header">
                <li>
                    <a className="active" href="#home">
                        <Ionicons size={25} color={"darkcyan"} name="home" />
                    </a>
                </li>
                <li>
                    <a href="#calendar">
                        <Ionicons size={25} ellipsizeMode="clip" color={"darkcyan"} name="calendar-number" />
                    </a>
                </li>
                <li>
                    <a href="#alunos">
                        <Ionicons size={25} color={"darkcyan"} name="library-sharp" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Ionicons size={25} color={"darkcyan"} name="image" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Ionicons size={25} color={"darkcyan"} name="archive" />
                    </a>
                </li>
                <li>
                    <a href="/login">
                        <Ionicons size={25} color={"darkcyan"} name="exit" />
                    </a>
                </li>

            </div>
            <div className="main-title">
                <h1>Gerenciamento de Laboratório</h1>

                <div>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>

                        <div className="cards">
                            <div className="card">
                                <Image style={styles.image} source={require("@/assets/images/lab1.png")} alt="imagem" />
                                <p>Agendar uso</p>
                                <button>Agendar</button>
                            </div>


                            <div className="card">
                                <Image style={styles.image} source={require("@/assets/images/lab2.jpeg")} alt="imagem" />
                                <p>Equipamentos</p>
                                <button>Ver</button>
                            </div>

                            <div className="card">
                                <Image style={styles.image} source={require("@/assets/images/lab1.png")} alt="imagem" />
                                <p>Galeria</p>
                                <button>Abrir</button>
                            </div>
                            <div className="card">
                                <Image style={styles.image} source={require("@/assets/images/lab2.jpeg")} alt="imagem" />
                                <p>Reciclagem</p>
                                <button>Reciclar</button>
                            </div>
                        </div>
                    </ScrollView>
                </div>
                <h1 id="calendar">Calendário</h1>
                <div className="card-calendar">
                    <Ionicons name="calendar" size={85} color={"darkcyan"}></Ionicons>
                    <div className="card-calendar">
                        <h2>{"14"}:{"12"}</h2>
                        <h5>{"30"}/{"07"}/{"2024"}</h5>
                    </div>
                </div>

                <h1>Controle de Alunos</h1>
                <div className="card-calendar">
                    <Ionicons name="add-circle" size={30} color={"darkcyan"} />

                    <button onClick={handleCickedStepForm} className="btn">Cadastrar Alunos</button>
                   
                </div>

                <div className="card-calendar">

                    <div className="lista">
                        <h1>Alunos Cadastrados</h1>
                        {/* <div className="card-lista">
          <p>
            {"José Capewa"}
            </p>
          <button className="btn">Eliminar</button>
          </div> */}
                    </div>

                </div>

                <h1>Livros</h1>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>

                    <div className="cards">
                        <div className="card" id="card">
                            <Image style={styles.libraryImage} source={require("@/assets/images/livro1.jpg")} alt="imagem" />
                            <button className="btnLer">Ler</button>
                        </div>


                        <div className="card" id="card">
                            <Image style={styles.libraryImage} source={require("@/assets/images/livro1.jpg")} alt="imagem" />
                            <button className="btnLer">Ler</button>
                        </div>

                        <div className="card" id="card">
                            <Image style={styles.libraryImage} source={require("@/assets/images/livro1.jpg")} alt="imagem" />
                            <button className="btnLer">Ler</button>
                        </div>
                        <div className="card" id="card">
                            <Image style={styles.libraryImage} source={require("@/assets/images/livro1.jpg")} alt="imagem" />
                            <button className="btnLer">Ler</button>
                        </div>
                    </div>
                </ScrollView>

                <h1>Reciclagem</h1>
                <div className="card-calendar">
                    <Ionicons name="archive" size={85} color={"darkcyan"} />

                </div>
            </div>
        </>

    )
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        margin: 0,
        top: -5,
        left: -5,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        height: 50,
    },
    scroll: {
        padding: 10,
        display: "flex",
        margin: "auto",
    },
    libraryImage: {
        margin: 0,
        width: 100,
        height: 110,
        top: -5,
        left: -5,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
    }
})