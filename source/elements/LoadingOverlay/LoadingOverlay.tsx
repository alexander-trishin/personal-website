const LoadingOverlay = () => {
    return (
        <div className="bg-neutral-900 fixed top-0 left-0 h-full w-full z-100 pointer-events-none select-none">
            <div className="text-primary fixed inset-1/2 h-16 w-16 -mt-8 -ml-8">
                <div className="animate-spin rounded-full border-8 border-gray-700 border-l-primary h-16 w-16" />
            </div>
        </div>
    );
};

export default LoadingOverlay;
