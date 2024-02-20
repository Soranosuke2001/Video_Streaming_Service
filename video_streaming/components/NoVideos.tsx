import { FC } from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { AlertCircle } from 'lucide-react'

interface NoVideosProps {}

const NoVideos: FC<NoVideosProps> = ({}) => {
  return (
    <div className='h-screen w-5/6 items-center'>
        <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                There were no videos found...
            </AlertDescription>
        </Alert>
    </div>
  )
}

export default NoVideos