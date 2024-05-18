import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"




function Header() {
    return (

        <div className="w-full py-3 ms-5">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <img className="w-40" src="https://i0.wp.com/agebenezer.org/wp-content/uploads/2020/01/cropped-Logo-Grande-6.png?resize=1536%2C489&ssl=1"
                alt="Logo" />
        </div>
    )
}

export default Header