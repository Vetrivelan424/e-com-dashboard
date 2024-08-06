import React from 'react'
import profile from '../assets/Images/logos/profile_img.png'
import profile1 from '../assets/Images/logos/profile_1.jpg'
import profile2 from '../assets/Images/logos/profile_2.jpg'

import Rating from '@mui/material/Rating';

import StarIcon from '@mui/icons-material/Star';

import CircularProgress from '@mui/joy/CircularProgress';
import InflationChart from '../components/InflationChart';
import ReactTable from '../components/ReactTable';
import NumberIncrement from '../components/NumberIncrement'

import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
export default function Dashboard() {
  // const [value, setValue] = useState('2');
  const userList = [
    {
      profile_img: profile1,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    },
    {
      profile_img: profile2,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    },
    {
      profile_img: profile,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    },
    {
      profile_img: profile2,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    },
    {
      profile_img: profile1,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    },
    {
      profile_img: profile2,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    },
    {
      profile_img: profile,
      first_name: 'Jack Rose',
      last_name: '798789',
      amount: '$124.00'
    }
  ]

  const columns = [
    {
      cell: (row) => (
        <div className='table-avatar-container'>
          <img
            className='table-avatar img-fluid'
            src={row.profile_img}
            alt="profile img"
          />
          {/* <img loading='eager' className='table-avatar img-fluid' src={row.image_name == '' || row.image_name == null || row.image_name == undefined ? `${CONFIG.AWS_ENDPOINT}/user_profile_images/dummy.png` : `${CONFIG.AWS_ENDPOINT}/user_profile_images/user_image_${row.user_id}.png`} alt='profile' /> */}
        </div>
      ),
      sortable: true,
      width: '65px',
    },
    {
      name: "Customer",
      selector: (row) => row.first_name,
      sortable: true,
      grow: 2,
      // width: '170px'
    },
    {
      name: "Order No.",
      selector: (row) => row.last_name,
      sortable: true,
      grow: 2,
      // width: '170px'

    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
      grow: 2,
      // width: '170px'

    },

    {
      name: "Status",
      selector: (row) => row.status === 1 ? "Active" : "Inactive",
      cell: (row) => {
        return (
          <>
            {
              row.status === 0 ? (<div className='Inactive'><span className='red-color'>Inactive</span></div>) : (<div className='active align-center'><span className=''>Deliverd</span></div>)
            }
          </>
        )
      },
      width: '100px',
      sortable: true,
      center: true
    },


  ]
  return (
    <div>
      <div className=''>
        <div className="aside-container back-light-black">
          <div className='menu-icons-1 menu-icons menu-blue-active pb-2 pe-3'>
            <HomeIcon sx={{ fontSize: 36 }} />
          </div>
          <div className='menu-icons my-4'>
          <AssessmentIcon sx={{ fontSize: 30 }} />
          </div>
          <div className='menu-icons '>
          <AssignmentTurnedInIcon sx={{ fontSize: 30 }} />
          </div>
          <div className='menu-icons '>
          <AccountBalanceWalletIcon sx={{ fontSize: 30 }} />
          </div>
          <div className='menu-icons '>
          <LocalMallIcon sx={{ fontSize: 30 }} />
          </div>
          <div className='menu-icons  fixed-bottom'>
          <LogoutIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
        <div className='w-100'>
          <div className='d-flex justify-content-between col-12 top-container back-light-black w-100'>
            <div className=" d-flex col-sm-6 col-md-6 col-lg-6 ">
              <div className='logo p-3'>
                <i className='icon-dashboard'></i>
              </div>
              <div className="position-relative mt-3">
                <input
                  className=''
                  type="search"
                  placeholder="Search"
                />
                <span><i className="icon-search"></i></span>
              </div>
            </div>
            <div className='d-flex col-12 col-sm-6 col-md-6 col-lg-6 my-3 justify-content-end pe-5'>
              <div className='profile-round align-center'>
              <EmailIcon sx={{ fontSize: 20 }} />
              </div>
              <div className='profile-round align-center'>
              <SettingsIcon sx={{ fontSize: 20 }} />
              </div>
              <div className='profile-round align-center'>
                <div className='point-blue'></div>
                <NotificationsIcon sx={{ fontSize: 20 }} />
              </div>
              <div className='ps-3 '>
                <img className='profile-round' width={100} src={profile} alt="profile" />
              </div>
            </div>
          </div>
          <div className='main-container'>
            <div className='p-4'>
              <p className='dash-text typewriter'>Dashboard</p>


              <div className='col-12 row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-8 row'>
                  <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                    <div className='totals-contianer fade-in'>
                      <div className='total-icon-container align-center total-icon-1'>
                      <LocalShippingIcon sx={{ fontSize: 34 }} />
                      </div>
                      <span className='text-13 '>Total Orders</span>
                      <div className='d-flex mt-2 justify-content-between'>
                        <span className='text-28'><NumberIncrement start={0} end={75} duration={2000} /></span>
                        <div className='d-flex'>
                          <div className='icon-up align-center me-1'><i className='color-green font-weight-800 icon-dropdown-line'></i></div>
                          <span className='text-15 margin-top-10 color-green font-weight-800'> 3%</span>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                    <div className='totals-contianer fade-in'>
                      <div className='total-icon-container align-center total-icon-2'>
                      <ShoppingCartIcon sx={{ fontSize: 34 }} />
                      </div>
                      <span className='text-13 '>Total Deliverd</span>
                      <div className='d-flex mt-2 justify-content-between'>
                        <span className='text-28'><NumberIncrement start={0} end={60} duration={2000} /></span>
                        <div className='d-flex'>
                          <div className='icon-up align-center me-1'><i className='color-green font-weight-800 icon-dropdown-line'></i></div>
                          <span className='text-15 margin-top-10 color-green font-weight-800'> 3%</span>


                        </div>
                      </div>
                    </div>
                  </div><div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                    <div className='totals-contianer fade-in'>
                      <div className='total-icon-container align-center total-icon-3'>
                      <RemoveShoppingCartIcon sx={{ fontSize: 34 }} />
                      </div>
                      <span className='text-13 '>Total Cancelled</span>
                      <div className='d-flex mt-2 justify-content-between'>
                        <span className='text-28'><NumberIncrement start={0} end={100} duration={2000}/></span>
                        <div className='d-flex'>
                          <div className='icon-up align-center me-1'><i className='color-green font-weight-800 icon-dropdown-line'></i></div>
                          <span className='text-15 margin-top-10 color-green font-weight-800'> 3%</span>

                        </div>
                      </div>
                    </div>
                  </div><div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                    <div className='totals-contianer fade-in'>
                      <div className='total-icon-container align-center total-icon-4'>
                      <AccountBalanceIcon sx={{ fontSize: 34 }} />
                      </div>
                      <span className='text-13 '>Total Revenue</span>
                      <div className='d-flex mt-2 justify-content-between'>
                        <span className='text-28 d-flex'>$<NumberIncrement start={0} end={12} duration={2000}/>k</span>
                        <div className='d-flex'>
                          <div className='icon-up align-center me-1'><i className='color-green font-weight-800 icon-dropdown-line'></i></div>
                          <span className='text-15 margin-top-10 color-green font-weight-800'> 3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-4 mx-2'>
                  <div className='totals-contianer fade-in d-flex justify-content-between'>
                    <div className=''>
                      <span className='text-13'>
                        Net Profit
                      </span> <br />
                      <span className='text-35 typewriter'>
                        $ 6759.25
                      </span>
                      <div className='d-flex'>
                        <div className='icon-up align-center me-1 mt-2'><i className='color-green font-weight-800 icon-dropdown-line'></i></div>
                        <span className='text-15 margin-top-10 color-green font-weight-800'> 3%</span>
                      </div>
                    </div>
                    <div>
                    <div className='align-center position-relative me-4'>
                      <CircularProgress
                        color="primary"
                        determinate
                        sx={{ '--CircularProgress-size': '100px' }}
                        size="lg"
                        value={80}
                        variant="solid"
                      >


                      </CircularProgress>
                      <div className=' flex-column goalcontainer-text'>
                        <span className='text-16 lign-height-2'>70%</span><br />
                        <span className='text-13 lign-height-2'>Goal <br /> completed</span>
                      </div>
                      
                    </div>
                    <div>
                      <span className='text-9'>*The Values here has been rounded off.</span>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='col-12 row'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-8'>
                    <div className='totals-contianer fade-in'>
                      <div className='d-flex justify-content-between'>
                        <span className='text-20 font-weight-800'>
                          Activity
                        </span>
                        <div className='weekly-container align-center'>
                          weekly
                        </div>
                      </div>
                      <div className='bar-chart-conainer'>

                        <InflationChart />
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                    <div className='totals-contianer fade-in'>
                      <div className='d-flex justify-content-between mt-2'>
                        <div className='d-flex justify-content-start'>
                          <div className='point-round red-point align-center'>
                            <GpsFixedIcon sx={{ fontSize: 32 }} />
                          </div>
                          <div className='m-2 goal-text'>
                            <span className='text-16'>Goals</span>
                          </div>
                        </div>
                        <div className='align-center me-4 icon-for-cont'>
                          <i className='icon-Right'></i>
                        </div>
                      </div>

                      <div className='d-flex my-4 justify-content-between'>
                        <div className='d-flex justify-content-start'>
                          <div className='point-round blue-point align-center'>
                          <LunchDiningIcon sx={{ fontSize: 32 }} />
                          </div>
                          <div className='m-2 goal-text'>
                            <span className='text-16'>Popular Dishes</span>
                          </div>
                        </div>
                        <div className='align-center me-4 icon-for-cont'>
                          <i className='icon-Right'></i>
                        </div>
                      </div>

                      <div className='d-flex  justify-content-between'>
                        <div className='d-flex justify-content-start'>
                          <div className='point-round green-point align-center'>
                          <DinnerDiningIcon sx={{ fontSize: 32 }} />
                          </div>
                          <div className='m-2 goal-text'>
                            <span className='text-16'>Menus</span>
                          </div>
                        </div>
                        <div className='align-center me-4 icon-for-cont'>
                          <i className='icon-Right'></i>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className='col-12 row'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-8'>
                    <div className='totals-contianer fade-in'>
                      <div className='d-flex justify-content-between'>
                        <span className='text-20 font-weight-800'>
                          Recent Orders
                        </span>
                      </div>
                      <div className='mb-5'>
                        <ReactTable
                          tableData={userList}
                          tableColumn={columns}
                          needPaginate={true}
                          csRowsPerPage={10}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                    <div className='totals-contianer fade-in'>
                      <div className='d-flex justify-content-between'>
                        <span className='text-20 font-weight-800'>
                          Customer's Feedback
                        </span>
                      </div>
                      <div className='feed-container mt-4'>
                        <div className='feedback'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>

                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>

                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>

                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>

                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>

                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>


                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>


                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              onChange={(event, newValue) => {
                                // setValue(newValue);
                              }}
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>


                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              onChange={(event, newValue) => {
                                // setValue(newValue);
                              }}
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>


                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              onChange={(event, newValue) => {
                                // setValue(newValue);
                              }}
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>


                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              onChange={(event, newValue) => {
                                // setValue(newValue);
                              }}
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>


                        <div className='feedback mt-4'>
                          <div className='d-flex'>
                            <div className='table-avatar-container'>
                              <img
                                className='table-avatar img-fluid'
                                src={profile}
                                alt="profile img"
                              />
                            </div>
                            <div className='ms-3'>
                              <span className='text-16'>
                                Jenny weilson
                              </span>
                            </div>
                          </div>
                          <div className='mt-2'>
                            <Rating
                              name="simple-controlled"
                              value={4}
                              emptyIcon={<StarIcon style={{ opacity: 1  }} fontSize="inherit" />}
                              onChange={(event, newValue) => {
                                // setValue(newValue);
                              }}
                            />
                          </div>
                          <div className=''>
                            <span className='text-14'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
