import React from 'react';
import './Tablet.css'
import John from '../../../assets/img/john.png'
import { useContext } from 'react';
import dataContext from '../../Context/Context';


const Tablet = ({data,pagin}) => {
  const { lastData } = useContext(dataContext);

  let dot = []

  for (let i = 1; i <= Math.ceil(data.length/10); i++) {
    dot.push(i)
  }

  return (
    <div className='container'>
      <table className="table table-striped table-hover w-100 mt-5 mx-auto">
        <thead className=''>
          <tr>
            <th >Owner</th>
            <th>End date</th>
            <th>Profits</th>
            <th>Losses</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody >

          {
            lastData?.map((item, index) => {

              return (
                <tr key={index}>
                  <td><img src={John} alt="" /></td> <td> {item.title}</td> <td className='text-danger'>1/15/12</td>
                  <td>$328.85</td>
                  <td>
                    (603) 555-0123
                  </td>
                </tr>
              )
            })

          }

        </tbody>


        <tbody>

        </tbody>
      </table>
      <nav aria-label="Page navigation example mx-auto" >
        <ul class="pagination mx-auto">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>

          {dot.map((dot) => {
            return <li onClick={()=>pagin(dot) } class="page-item"><a class="page-link" href="#">{dot}</a></li>


          }
          )}
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Tablet;