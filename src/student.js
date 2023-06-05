import React from 'react'
import Navbar from './Navbar';

const student = () => {
  return (
    <>
    <Navbar/>
    <h1>Student Details</h1>
    
      <table>
    <div className='heading'>
    <th>Name</th>
    <th>Age</th>
    <th>course</th>
    <th>Batch</th>
    <th>change</th>
    </div><hr></hr>

    <tr className='tab'>
      <td>jooo</td>
      <td>23</td>
      <td>March</td>
      <td>18</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>kiran</td>
      <td>24</td>
      <td>july</td>
      <td>19</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>bindu</td>
      <td>22</td>
      <td>december</td>
      <td>20</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>Maduri</td>
      <td>21</td>
      <td>May</td>
      <td>21</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>Harsha</td>
      <td>24</td>
      <td>October</td>
      <td>22</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>Raviteja</td>
      <td>25</td>
      <td>April</td>
      <td>23</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>tejaswini</td>
      <td>27</td>
      <td>November</td>
      <td>22</td>
      <td>Edit</td>
    </tr><hr></hr>

    <tr className='tab'>
    <td>Ramya</td>
      <td>23</td>
      <td>december</td>
      <td>24</td>
      <td>Edit</td>
    </tr><hr></hr>

    </table>
    
    
    </>
  )
}

export default student;