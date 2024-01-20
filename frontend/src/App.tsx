import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/dashboard/DashBoard';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Profile from './pages/profile/Profile';
import ParentPanelContact from './panels/parent/components/Contact';
import ParentPanelExamRoutine from './panels/parent/components/ExamRoutine';
import ParentPanelPaymentInvoices from './panels/parent/components/Invoices';
import ParentPanelRoutine from './panels/parent/components/Routine';
import ParentPanelLayout from './panels/parent/ParentPanelLayout';

function App() {
	return (
		<Routes>
			<Route path="/*" element={<DashBoard />}>
				<Route path="admin" />
				<Route path="teacher" />
				<Route path="student" />
				<Route path="parent/*" element={<ParentPanelLayout />}>
					<Route path="contact" index element={<ParentPanelContact />} />
					<Route path="exam-routine" element={<ParentPanelExamRoutine />} />
					<Route path="payment-invoice" element={<ParentPanelPaymentInvoices />} />
					<Route path="routine" element={<ParentPanelRoutine />} />
				</Route>
			</Route>
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

export default App;
