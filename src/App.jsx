import { React, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './components/loader.jsx'

const PageNotFound = lazy(() => import('./pages/notFound.jsx'))

const Dashboard = lazy(() => import('./pages/dashboard.jsx'));
const Customer = lazy(() => import('./pages/customer.jsx'));
const Products = lazy(() => import('./pages/product.jsx'));
const Transaction = lazy(() => import('./pages/transaction.jsx'));

const BarCharts = lazy(() => import('./pages/charts/barChart.jsx'));
const PieCharts = lazy(() => import('./pages/charts/pieChart.jsx'));
const LineChart = lazy(() => import('./pages/charts/lineChart.jsx'));

const Stopwatch = lazy(() => import('./pages/stopwatch.jsx'));
const Toss = lazy(() => import('./pages/toss.jsx'));
const Coupon = lazy(() => import('./pages/coupon.jsx'));


const NewProduct = lazy(() => import('./pages/management/NewProducts.jsx'))
const TransactionMangement = lazy(() => import('./pages/management/TransactionManagement.jsx'))
const ProductManagement = lazy(() => import('./pages/management/ProductManagement.jsx'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='*' element={<PageNotFound />} />

          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/customer' element={<Customer />} />
          <Route path='/admin/transaction' element={<Transaction />} />
          <Route path='/admin/products' element={<Products />} />

          {/* Charts */}
          <Route path='/admin/chart/bar' element={<BarCharts />} />
          <Route path='/admin/chart/pie' element={<PieCharts />} />
          <Route path='/admin/chart/line' element={<LineChart />} />

          {/* Apps */}
          <Route path='/admin/app/stopwatch' element={<Stopwatch />} />
          <Route path='/admin/app/toss' element={<Toss />} />
          <Route path='/admin/app/coupon' element={<Coupon />} />

          {/* {Managment} */}
          <Route path='/admin/products/new' element={<NewProduct />} />
          <Route path='/admin/products/:id' element={<ProductManagement />} />
          <Route path='/admin/transaction/:id' element={<TransactionMangement />} />

        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
