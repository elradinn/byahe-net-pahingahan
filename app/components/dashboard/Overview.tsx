import Link from "next/link";
import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Input } from "@/app/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table";

export function Overview() {
    return (
        <div className="flex flex-col min-h-screen px-4 mx-auto xl:px-20 md:px-10 sm:px-2">
            <main className="flex flex-col flex-1 gap-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card x-chunk="dashboard-01-chunk-0">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                PHP 45,231.89
                            </div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-1">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Bookings Today
                            </CardTitle>
                            <Users className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">6</div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-2">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Bookings
                            </CardTitle>
                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">157</div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Properties
                            </CardTitle>
                            <Activity className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">16</div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:gap-8">
                    <Card
                        className="xl:col-span-2"
                        x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Transactions</CardTitle>
                                <CardDescription>
                                    Recent transactions from your properties.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="gap-1 ml-auto">
                                <Link href="#">
                                    View All
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead className="hidden xl:table-column">
                                            Type
                                        </TableHead>
                                        <TableHead className="hidden xl:table-column">
                                            Status
                                        </TableHead>
                                        <TableHead className="hidden xl:table-column">
                                            Date
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Amount
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Liam Johnson
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                liam@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $250.00
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Olivia Smith
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                olivia@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Refund
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                Declined
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-24
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $150.00
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Noah Williams
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                noah@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Subscription
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-25
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $350.00
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Emma Brown
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                emma@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-26
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $450.00
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Liam Johnson
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                liam@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-27
                                        </TableCell>
                                        <TableCell className="text-right">
                                            $550.00
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
