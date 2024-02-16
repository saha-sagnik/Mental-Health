'use client';

function SideBarComponent() {
  return (
    <>   
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" className="rounded-md h-[90vh] z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-4 py-16 overflow-y-auto bg-stone-100 dark:bg-gray-800">
      <ul className="space-y-14 font-medium">
         <li>
            <a href="/dashboard/home" className="flex items-center p-2 text-black rounded-lg dark:text-white hover:text-black dark:hover:bg-gray-100 group">
            <i className="ri-dashboard-fill text-2xl text-gray-500"></i>
               <span className="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="/dashboard/appointments" className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-black dark:hover:bg-gray-100 group">
                <i className="ri-draft-fill text-2xl text-gray-500"></i>
               <span className="flex-1 ms-3 whitespace-nowrap">Appointments</span>
            </a>
         </li>
         <li>
            <a href="/dashboard/doctors" className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-black dark:hover:bg-gray-100 group">
                <i className="ri-stethoscope-fill text-2xl text-gray-500"></i>
               <span className="flex-1 ms-3 whitespace-nowrap">Doctors</span>
            </a>
         </li>
         <li>
            <a href="/dashboard/wellness" className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-black dark:hover:bg-gray-100 group">
            <i className="ri-heart-pulse-fill text-2xl text-gray-500"></i>
               <span className="flex-1 ms-3 whitespace-nowrap">Wellness Resources</span>
            </a>
         </li>
         <li>
            <a href="/dashboard/settings" className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-black dark:hover:bg-gray-100 group">
               <i class="ri-settings-4-fill text-2xl text-gray-500"></i>
               <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
</>
  );
}

export default SideBarComponent
