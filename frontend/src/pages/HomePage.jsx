import { UserButton } from "@clerk/clerk-react"


const HomePage = () => {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const[activeChannel, setActiveChannel]= useState(null);
  return (
    <div className>
      <UserButton/>
      Home Page
    </div>
  )
}

export default HomePage