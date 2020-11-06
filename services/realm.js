import Realm from "realm"

import TopicSchema from "../schemas/TopicSchema";
//import WorkSchema from "../schemas/WorkSchema";

export default function getRealm () {
    return Realm.open ({
        schema: [TopicSchema],
    })
}

