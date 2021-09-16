import React, {useState} from 'react';

import ButtonLogout from '../../components/ButtonLogout';
import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';
import Input from '../../components/Input';

import Snack from '../../components/Breakfast/Snack';
import Coffee from '../../components/Breakfast/Coffee';
import Juice from '../../components/Breakfast/Juice';
import InputSelect from '../../components/InputSelect';



export default function Hall() {
	const [breakfastClass, setBreakfastClass] = useState("")
	const [allDayClass, setAllDayClass] = useState("selected")

	const [values, setValues] = useState({
		first: 'burgers',
		second: 'sides',
		third: 'drinks',
	})

	const [labels, setLabels] = useState({
		first: 'burgers',
		second: 'adicionais',
		third: 'bebidas',
	})

	const [activation1, setActivation1] = useState(true)
	const [activation2, setActivation2] = useState(false)
	const [activation3, setActivation3] = useState(false)

	const[products, setProducts] = useState(<Snack/>)

	const selectBreakfast = () => {
		setActivation1(true)
		setActivation2(false)
		setActivation3(false)
		setBreakfastClass("selected")
		setAllDayClass("")
		setValues({
			first: 'snacks',
			second: 'coffes',
			third: 'juices',
		})
		setLabels({
			first: 'lanches',
			second: 'cafés',
			third: 'sucos',
		})
	}

	const selectAllDay = () => {
		setActivation1(true)
		setActivation2(false)
		setActivation3(false)
		setAllDayClass("selected")
		setBreakfastClass("")
		setValues({
			first: 'burgers',
			second: 'sides',
			third: 'drinks',
		})
		setLabels({
			first: 'burgers',
			second: 'adicionais',
			third: 'bebidas',
		})
	}

	const changeProducts = (e) => {
		const click = e.target.innerText
		switch (click) {
			case "BURGERS":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				break;
			case "ADICIONAIS":
				setActivation1(false)
				setActivation2(true)
				setActivation3(false)
				
				break
			case "BEBIDAS":
				setActivation1(false)
				setActivation2(false)
				setActivation3(true)
				break
			case "LANCHES":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				setProducts(<Snack/>)
				break;
			case "CAFÉS":
				setActivation1(false)
				setActivation2(true)
				setActivation3(false)
				setProducts(<Coffee/>)
				break
			case "SUCOS":
				setActivation1(false)
				setActivation2(false)
				setActivation3(true)
				setProducts(<Juice/>)
				break

			default:
		}
	}

	return (
		<div className="pages-container">
			<header className="title-area">
				<div>
					<h1>DIVINO BURGER</h1>
					<p>horário atual</p>
				</div>

				<ButtonLogout />
			</header>

			<nav>
				<ul className="menu-types">
					<li className={breakfastClass} onClick={selectBreakfast}> Breakfast </li>
					<li className={allDayClass} onClick={selectAllDay}> All Day </li>
				</ul>


				<div className="order-progress">
					<ButtonDefault
						className="btn-order-status btn-default"
					>
						Em andamento
					</ButtonDefault>

					<ButtonDefault
						className="btn-order-status btn-default margin-left-1"
					>
						Finalizados
					</ButtonDefault>
				</div>
			</nav>
			<main>

				<section className="order-filling">
					<div className="client-data margin-bottom-2">
						<InputSelect/>
						<Input className="input-hall" placeholder="Insira o nome do cliente" />
					</div>
					<div className="menu">
						<aside>
							<LinkAside className={activation1 ? "active" : null} type={values.first} onClick={changeProducts}>{labels.first}</LinkAside>
							<LinkAside className={activation2 ? "active" : null} type={values.second} onClick={changeProducts}>{labels.second}</LinkAside>
							<LinkAside className={activation3 ? "active" : null} type={values.third} onClick={changeProducts}>{labels.third}</LinkAside>
						</aside>

						<section className="products">
							{products}
						
						</section>
					</div>
				</section>
				<CartArea />

			</main>
		</div>
	)
};


