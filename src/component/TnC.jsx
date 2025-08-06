import Navbar from "./Navbar"
import favicon from "../assets/image/cloud-blender-render-logo.svg"
export default function TnC() {
  return (
    <div className="body">
         <title>Support Cloud Blender Render</title>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <Navbar/>
        <div className="tnc-container">
            <div className="tnc-head">
                TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
            </div>
            <div className="tnc-layout">
               <p>Copyright {new Date().getFullYear()} Rahul Ahire</p>
<p>
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
</p>
<p>
    <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">http://www.apache.org/licenses/LICENSE-2.0</a>
</p>

    <p>
        Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    </p>


            </div>
        </div>
        <div className="refund-container">
            <div className="refund-head">
                Refund Policy
            </div>
            <div className="refund-description">
                All sales are final and refund cannot be issued.
            </div>
        </div>
    </div>
  )
}
