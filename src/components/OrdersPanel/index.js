/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React, {useState, useEffect} from 'react';
import ListAllOrders from '../ListAllOrders'
import Header from '../Header'
import ButtonDefault from '../ButtonDefault';


export default function OrdersPanel({classBtn}) {
	
	const [allOrders, setAllOrders] = useState([]);


	const apiURL = 'https://lab-api-bq.herokuapp.com';
	const apiOrders = `${apiURL}/orders/`;
	const token = localStorage.getItem('token');

	useEffect(() => {
		const getRequestOptions = {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		};

		fetch(apiOrders, getRequestOptions)
			.then((response) => response.json())
			.then((data) => {
				const sortById = data.sort((itemA, itemB) => itemA.id - itemB.id);
				setAllOrders(sortById);

			});
	}, [apiOrders, token]);

	const updateOrders = () =>{
		const getRequestOptions = {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		};

		fetch(apiOrders, getRequestOptions)
			.then((response) => response.json())
			.then((data) => {
				const sortById = data.sort((itemA, itemB) => itemA.id - itemB.id);
				setAllOrders(sortById);

			});
	}

	setTimeout(updateOrders,60000)
	

  const [navClass, setNavClass] = useState({
    pending:"selected",
    loading:"",
    done:"",
    delivered:"",
    all:"",
  })

  const lastStatus =  localStorage.getItem('lastOrderStatus');
  const [status, setStatus] = useState("pending")
	const[visibilityBtn, setVisibilityBtn]= useState("btn-invisible")

  useEffect(() => {
		if(lastStatus){
			setNavClass({[lastStatus]:"selected"})
			if (lastStatus==="all"){
				setStatus(false)
				setVisibilityBtn("btn-visible")
			}else{
				setStatus(lastStatus)
			}
		}
  }, [lastStatus])


	
  const navOrders = (chosenStatus) =>{
		if (chosenStatus==="all"){
			setStatus(false)
			setVisibilityBtn("btn-visible")
			localStorage.setItem('lastOrderStatus', "all");

		}else{
			setStatus(chosenStatus)
			localStorage.setItem('lastOrderStatus', chosenStatus);
	
		}
	}

	return (
		<div className="pages-container">
			<Header classBtn={classBtn}/>
			<nav>
				<ul className="menu-types">
					<li className={navClass.pending} onClick={()=>{ updateOrders(); setNavClass({pending:"selected"}); navOrders("pending")}}>
						{' '}
						Em espera{' '}
					</li>
					<li className={navClass.loading} onClick={()=>{updateOrders(); setNavClass({loading:"selected"}); navOrders("loading")}}>
						{' '}
						Iniciados{' '}
					</li>

					<li className={navClass.done} onClick={()=>{updateOrders(); setNavClass({done:"selected"}); navOrders("done")}}>
						{' '}
						Prontos{' '}
					</li>

          <li className={navClass.delivered} onClick={()=>{updateOrders(); setNavClass({delivered:"selected"}); navOrders("delivered")}}>
						{' '}
						Entregues{' '}
					</li>

					<li className={navClass.all} onClick={()=>{updateOrders(); setNavClass({all:"selected"}); navOrders("all")}}>
						{' '}
						Histórico{' '}
					</li>
				</ul>

				<div className="order-progress">
				<ButtonDefault className="btn-update-orders" onClick={() => {updateOrders()}}>
			 ⏱ Atualizar pedidos
			</ButtonDefault>
				</div>
			</nav>


			<ListAllOrders session ={status} updateOrders= {updateOrders} className={visibilityBtn} orders={allOrders} />
			
		</div>
	);
}
