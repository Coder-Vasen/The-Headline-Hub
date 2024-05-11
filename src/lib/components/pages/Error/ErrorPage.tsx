import  ExclamationCircleIcon  from  "@heroicons/react/24/outline/ExclamationCircleIcon"
type PageError = {
  message: string;
}
export default function ErrorPage({ message }: PageError) {
    return (
      <>
        <div className="w-full h-full flex-grow flex flex-col items-center justify-center">
          <ExclamationCircleIcon className="h-36 w-36 dark:text-slate-200"/>
          <p className="text-xl dark:text-slate-100 font-semibold">Oops! We couldn't fetch the latest news.</p>
          <p className="text-lg dark:text-slate-200">{message}</p>
        </div>
        
      </>
    );
  }