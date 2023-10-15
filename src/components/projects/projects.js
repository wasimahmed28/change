import React from 'react'

const projects = () => {
  return (
    <section id="projects">
    <div class="container">
        <h2 class="main-heading text-center">Projects</h2>
        
        <div class="tabs">
            <span data-tab-value="#tab_1" class="tabs-head active">Section 1</span>
            <span data-tab-value="#tab_2" class="tabs-head">Section 2</span>
            <span data-tab-value="#tab_3" class="tabs-head">Section 3</span>
        </div>
      
        <div class="tab-content">
            <div class="tabs__tab active" id="tab_1" data-tab-info>
                <p><strong>Section 1</strong></p>
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat aute irure dolorUt enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat aute irure dolorUt enim ad minim veniam quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat aute irure dolorUt enim ad minim veniam quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
            </div>
            <div class="tabs__tab" id="tab_2" data-tab-info>
                <p><strong>Section 2</strong></p>
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat aute irure dolorUt enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat aute irure dolorUt enim ad minim veniam quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat aute irure</p>
            </div>
            <div class="tabs__tab" id="tab_3" data-tab-info>
                <p><strong>Section 3</strong></p>
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat aute irure dolorUt enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat aute irure dolorUt enim ad minim veniam quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat aute irure dolorUt enim ad minim veniam quis nostrud 
                exercitation ullamco</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default projects
