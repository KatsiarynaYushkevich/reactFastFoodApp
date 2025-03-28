import "./header.scss"

export default function Header() {
    return (
        <header>
            <div className="header_wrapper">
                <div className='container header_content'>

                </div>
            </div>
            <div className='container header_nav'>
                <a>Бургеры</a>
                <a>Закуски</a>
                <a>Хот-доги</a>
                <a>Комбо</a>
                <a>Шаурма</a>
                <a>Пицца</a>
                <a>Вок</a>
                <a>Десерты</a>
                <a>Соусы</a>
            </div>
        </header>
    )
}