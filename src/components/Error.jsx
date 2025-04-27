//Routing error message
import { Link } from 'react-router-dom';
export default function Error() {
    return (
<h2 className='sans-font-reg p-2'>
    Something went wrong! Please either reload or go back to the <Link href="/" className="text-black">homepage.</Link> 
</h2>
    );
}