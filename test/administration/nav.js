//User Management



import AccountUser from './screens/AccountUser';
import AddService from './screens/AddService';
import Administration from './screens/Administration';
import AddContent from './screens/ContentManagement/AddContent';
import DetailContent from './screens/ContentManagement/DetailContent';
import ListContent from './screens/ContentManagement/ListContent';
import Home from './screens//Home';
import InformationUser from './screens/InformationUser';
import ItemStore from './screens/Joined/ItemStore';
import LinkJoined from './screens/Joined/LinkJoined';
import MosJoined from './screens/Joined/MosJoined';
import CanceledList from './screens/Joined/Move/Mission/CanceledList';
import CompletedList from './screens/Joined/Move/Mission/CompletedList';
import PendingList from './screens/Joined/Move/Mission/PendingList';
import Booking from './screens/Joined/Move/Booking';
import CallDriver from './screens/Joined/Move/CallDriver';
import OrderList from './screens/Joined/Move/CarDriver/OrderList';
import ApprovedList from './screens/Joined/Move/CarRental/ApprovedList';
import CarDetail from './screens/Joined/Move/CarRental/CarDetail';
import CarRentalHistory from './screens/Joined/Move/CarRental/CarRentalHistory';
import DetailCar from './screens/Joined/Move/CarRental/DetailCar';
import FinishedList from './screens/Joined/Move/CarRental/FinishedList';
import PaidDepositList from './screens/Joined/Move/CarRental/PaidDepositList';
import StartedList from './screens/Joined/Move/CarRental/StartedList';
import CarRental from './screens/Joined/Move/CarRental';
import HistoryMatching from './screens/Joined/Move/Matching/HistoryMatching';
import PostList from './screens/Joined/Move/Matching/PostList';
import ProcessedMatching from './screens/Joined/Move/Matching/ProcessedMatching';
import Matching from './screens/Joined/Move/Matching';
import MissionList from './screens/Joined/Move/Mission/MissionList';
import Mission from './screens/Joined/Move/Mission';
import SOS from './screens/Joined/Move/SOS';
import MoveJoined from './screens//Joined/MoveJoined';
import OrderHistoryLink from './screens/Joined/OrderHistoryLink';
import DepositDividend from './screens/Joined/Pay/ISGroupToken/DepositDividend';
import DividendHistory from './screens/Joined/Pay/ISGroupToken/DividendHistory';
import SuccessDeposit from './screens/Joined/Pay/Wallet/SuccessDeposit';
import SuccessTransfer from './screens/Joined/Pay/Wallet/SuccessTransfer';
import SuccessWithdraw from './screens/Joined/Pay/Wallet/SuccessWithdraw';
import TransferDividend from './screens/Joined/Pay/ISGroupToken/TransferDividend';
import WithdrawDividend from './screens/Joined/Pay/ISGroupToken/WithdrawDividend';
import Dividend from './screens/SystemFeatureManagement/PAY/Dividend/Dividend';
import ISGroupToken from './screens/SystemFeatureManagement/PAY/ISGroupToken/ISGroupToken';
import DepositPoint from './screens/Joined/Pay/Point/DepositPoint';
import PointHistory from './screens/Joined/Pay/Point/PointHistory';
import TransferPoint from './screens/Joined/Pay/Point/TransferPoint';
import Point from './screens/SystemFeatureManagement/PAY/Point/Point';
import DepositStake from './screens/Joined/Pay/Stake/DepositStake';
import StakeHistory from './screens/Joined/Pay/Stake/StakeHistory';
import TransferStake from './screens/Joined/Pay/Stake/TransferStake';
import WithdrawStake from './screens/Joined/Pay/Stake/WithdrawStake';
import Stake from './screens//SystemFeatureManagement/PAY/Stake/Stake';
import DepositUSDT from './screens/Joined/Pay/USDT/DepositUSDT';
import TransferUSDT from './screens/Joined/Pay/USDT/TransferUSDT';
import USDTHistory from './screens/Joined/Pay/USDT/USDTHistory';
import WithdrawUSDT from './screens/Joined/Pay/USDT/WithdrawUSDT';
import USDT from './screens/SystemFeatureManagement/PAY/USDT/USDT';
import DepositWallet from './screens/Joined/Pay/Wallet/DepositWallet';
import TransferWallet from './screens/Joined/Pay/Wallet/TransferWallet';
import WalletHistory from './screens/Joined/Pay/Wallet/WalletHistory';
import WithdrawWallet from './screens/Joined/Pay/Wallet/WithdrawWallet';
import Wallet from './screens/SystemFeatureManagement/PAY/Wallet/Wallet';
import PayJoined from './screens/Joined/PayJoined';
import SynchronousStoreLink from './screens/Joined/SynchronousStoreLink';
import JoinedUser from './screens/JoinedUser';
import KYCUser from './screens/KYCUser';
import ListService from './screens/ListService';
import MembershipUser from './screens/MembershipUser';
import NotificationHistoryUser from './screens/NotificationHistoryUser';
import ProfileUser from './screens/ProfileUser';
import SearchUser from './screens/SearchUser';
import BadlyList from './screens/Support/BadlyList';
import Chat from './screens/Support/Chat';
import DecentralizationOfSupport from './screens/Support/DecentralizationOfSupport';
import Report from './screens/SystemFeatureManagement/PAY/P2P/Report';
import Support from './screens/Support/Support';
import SupportList from './screens//Support/SupportList';
import SupportMemberList from './screens/Support/SupportMemberList';
import AccessPermissions from './screens/SystemFeatureManagement/PAY/P2P/AccessPermissions';
import Commission from './screens/SystemFeatureManagement/PAY/P2P/Commission';
import EditCommission from './screens/SystemFeatureManagement/ISLINK/EditCommission';
import ISLink from './screens/SystemFeatureManagement/ISLINK/ISLink';
import OrderComplaintHistory from './screens/SystemFeatureManagement/ISLINK/OrderComplaintHistory';
import AddSetting from './screens/SystemFeatureManagement/ISMOS/AddSetting';
import Setting from './screens/SystemFeatureManagement/ISMOS/Setting';
import DetailFnBStore from './screens/SystemFeatureManagement/ISMOS/StoreList/DetailFnBStore';
import DetailRetailStore from './screens/SystemFeatureManagement/ISMOS/StoreList/DetailRetailStore';
import Upgraded from './screens/SystemFeatureManagement/ISMOS/StoreList/Upgraded';
import mStoreList from './screens/SystemFeatureManagement/ISMOS/StoreList/mStoreList';
import StoreList from './screens/SystemFeatureManagement/ISMOS/StoreList';
import StoreSync from './screens/SystemFeatureManagement/ISMOS/StoreSync';
import ListDecentralization from './screens/SystemFeatureManagement/ISMOS/UpgradeAgent/ListDecentralization';
import ListUpgraded from './screens/SystemFeatureManagement/ISMOS/UpgradeAgent/ListUpgraded';
import UpgradeAgent from './screens/SystemFeatureManagement/ISMOS/UpgradeAgent';
import ComplaintHistory from './screens/SystemFeatureManagement/PAY/P2P/ComplaintHistory';
import P2P from './screens/SystemFeatureManagement/PAY/P2P/P2P';
import Pay from './screens/SystemFeatureManagement/PAY/Pay';
import PostpaidWallet from './screens/SystemFeatureManagement/PAY/PostpaidWallet/PostpaidWallet';
import SystemFeature from './screens/SystemFeatureManagement/SystemFeature';
import UserManagement from './screens/UserManagement';

const vars = {
	AdminAccountUser: AccountUser,
	AdminAddService: AddService,
	AdminAdministration: Administration,
	AdminAddContent: AddContent,
	AdminDetailContent: DetailContent,
	AdminListContent: ListContent,
	AdminHome: Home,
	AdminInformationUser: InformationUser,
	AdminItemStore: ItemStore,
	AdminLinkJoined: LinkJoined,
	AdminMosJoined: MosJoined,
	AdminCanceledList: CanceledList,
	AdminCompletedList: CompletedList,
	AdminPendingList: PendingList,
	AdminBooking: Booking,
	AdminCallDriver: CallDriver,
	AdminOrderList: OrderList,
	AdminApprovedList: ApprovedList,
	AdminCarDetail: CarDetail,
	AdminCarRentalHistory: CarRentalHistory,
	AdminDetailCar: DetailCar,
	AdminFinishedList: FinishedList,
	AdminPaidDepositList: PaidDepositList,
	AdminStartedList: StartedList,
	AdminCarRental: CarRental,
	AdminHistoryMatching: HistoryMatching,
	AdminPostList: PostList,
	AdminProcessedMatching: ProcessedMatching,
	AdminMatching: Matching,
	AdminMissionList: MissionList,
	AdminMission: Mission,
	AdminSOS: SOS,
	AdminMoveJoined: MoveJoined,
	AdminOrderHistoryLink: OrderHistoryLink,
	AdminDepositDividend: DepositDividend,
	AdminDividendHistory: DividendHistory,
	AdminSuccessDeposit: SuccessDeposit,
	AdminSuccessTransfer: SuccessTransfer,
	AdminSuccessWithdraw: SuccessWithdraw,
	AdminTransferDividend: TransferDividend,
	AdminWithdrawDividend: WithdrawDividend,
	AdminDividend: Dividend,
	AdminISGroupToken: ISGroupToken,
	AdminDepositPoint: DepositPoint,
	AdminPointHistory: PointHistory,
	AdminTransferPoint: TransferPoint,
	AdminPoint: Point,
	AdminDepositStake: DepositStake,
	AdminStakeHistory: StakeHistory,
	AdminTransferStake: TransferStake,
	AdminWithdrawStake: WithdrawStake,
	AdminStake: Stake,
	AdminDepositUSDT: DepositUSDT,
	AdminTransferUSDT: TransferUSDT,
	AdminUSDTHistory: USDTHistory,
	AdminWithdrawUSDT: WithdrawUSDT,
	AdminUSDT: USDT,
	AdminDepositWallet: DepositWallet,
	AdminTransferWallet: TransferWallet,
	AdminWalletHistory: WalletHistory,
	AdminWithdrawWallet: WithdrawWallet,
	AdminWallet: Wallet,
	AdminPayJoined: PayJoined,
	AdminSynchronousStoreLink: SynchronousStoreLink,
	AdminJoinedUser: JoinedUser,
	AdminKYCUser: KYCUser,
	AdminListService: ListService,
	AdminMembershipUser: MembershipUser,
	AdminNotificationHistoryUser: NotificationHistoryUser,
	AdminProfileUser: ProfileUser,
	AdminSearchUser: SearchUser,
	AdminBadlyList: BadlyList,
	AdminChat: Chat,
	AdminDecentralizationOfSupport: DecentralizationOfSupport,
	AdminReport: Report,
	AdminSupport: Support,
	AdminSupportList: SupportList,
	AdminSupportMemberList: SupportMemberList,
	AdminAccessPermissions: AccessPermissions,
	AdminCommission: Commission,
	AdminEditCommission: EditCommission,
	AdminISLink: ISLink,
	AdminOrderComplaintHistory: OrderComplaintHistory,
	AdminAddSetting: AddSetting,
	AdminSetting: Setting,
	AdminDetailFnBStore: DetailFnBStore,
	AdminDetailRetailStore: DetailRetailStore,
	AdminUpgraded: Upgraded,
	AdminmStoreList: mStoreList,
	AdminStoreList: StoreList,
	AdminStoreSync: StoreSync,
	AdminListDecentralization: ListDecentralization,
	AdminListUpgraded: ListUpgraded,
	AdminUpgradeAgent: UpgradeAgent,
	AdminComplaintHistory: ComplaintHistory,
	AdminP2P: P2P,
	AdminPay: Pay,
	AdminPostpaidWallet: PostpaidWallet,
	AdminSystemFeature: SystemFeature,
	AdminUserManagement: UserManagement,

};

export default vars;