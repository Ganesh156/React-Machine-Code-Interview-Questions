import './App.css'
import {useState} from 'react'
import StarRating from './components/StarRating'
import explorer from './data/folderData'
import Folder from './components/Folder'
import useTraverseTree from './hooks/use-traverse-tree'
import TicTacToe from './components/TicTacToe'
import Popover from './components/Popover'

function App() {
const [star,setRating] = useState(0)
const [explorerData,setExplorerData] = useState(explorer)

const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <>
    {/* Star Rating Component */}
      <StarRating rating={star} setRating={setRating}/>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
      <TicTacToe/>
      <Popover content="This is the popover content">
        <button>Click me</button>
      </Popover>
    </>
  )
}

export default App
