"use client"

import { Card,CardContent,CardFooter,CardHeader} from "../card";
import { Header } from "./header";
interface CardWrapperProps{
    children:React.ReactNode;
    headerLabel:string;
    backButtonLabel:string;
    backButtonHref:string;
    showSocial?:boolean
}

export const CardWrapper=({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}:CardWrapperProps)=>{
    return(
        <Card className="w-[400px] items-center">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        </Card>
    )
}