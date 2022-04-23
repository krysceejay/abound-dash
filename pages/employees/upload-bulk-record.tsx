import type { NextPage } from 'next'

import Layout from '../../components/layouts/Dashboard'
import DragAndDrop from '../../components/DragAndDrop'

const UploadBulkRecord: NextPage = () => {
    return (
        <Layout title="Upload Bulk Employee">
            <div className="bg-white p-[18px] rounded-lg">
                <div className="w-3/5 m-auto my-28">
                    <DragAndDrop />
                    <div className="mx-auto text-center mt-8">
                        <span className="text-sm">Don’t have the Abound Bulk Upload template?</span>
                        <button 
                        className="focus:outline-none text-[#1379C6] text-xs font-gordita-medium block mx-auto" 
                        type="button">
                        Download it here
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UploadBulkRecord