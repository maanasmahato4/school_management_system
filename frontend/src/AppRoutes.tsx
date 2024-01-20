import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/dashboard/DashBoard';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Profile from './pages/profile/Profile';
import StudentPanel from './panels/student/StudentPanel';
import StudentPanelContacts from './panels/student/components/Contact';
import StudentPanelAttendance from './panels/student/components/Attendance';
import StudentPanelExamMarks from './panels/student/components/ExamMarks';
import StudentPanelExamRoutine from './panels/student/components/ExamRoutine';
import StudentPanelClassRoutine from './panels/student/components/Routine';
import StudentpanelPaymentInvoice from './panels/student/components/PaymentInvoice';
import StudentPanelStudyMaterials from './panels/student/components/StudyMaterials';
import ParentPanel from './panels/parent/ParentPanel';
import ParentPanelContact from './panels/parent/components/Contact';
import ParentPanelExamRoutine from './panels/parent/components/ExamRoutine';
import ParentPanelPaymentInvoices from './panels/parent/components/Invoices';
import ParentPanelRoutine from './panels/parent/components/Routine';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/*" element={<DashBoard />}>
				<Route path="admin" />
				<Route path="teacher" />
				<Route path="student/*" element={<StudentPanel />}>
					<Route index element={<StudentPanelContacts />} />
					<Route path="contacts" index element={<StudentPanelContacts />} />
					<Route path="attendance" element={<StudentPanelAttendance />} />
					<Route path="exam-marks" element={<StudentPanelExamMarks />} />
					<Route path="exam-routine" element={<StudentPanelExamRoutine />} />
					<Route path="class-routine" element={<StudentPanelClassRoutine />} />
					<Route path="payment-invoices" element={<StudentpanelPaymentInvoice />} />
					<Route path="study-materials" element={<StudentPanelStudyMaterials />} />
				</Route>
				<Route path="parent/*" element={<ParentPanel />}>
					<Route index element={<ParentPanelContact />} />
					<Route path="contacts" index element={<ParentPanelContact />} />
					<Route path="exam-routine" element={<ParentPanelExamRoutine />} />
					<Route path="payment-invoices" element={<ParentPanelPaymentInvoices />} />
					<Route path="class-routine" element={<ParentPanelRoutine />} />
				</Route>
			</Route>
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

export default AppRoutes;
