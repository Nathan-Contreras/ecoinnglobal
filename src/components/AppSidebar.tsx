import { Newspaper, TrendingUp, Globe, Clock, ExternalLink } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const importNews = [
  {
    id: 1,
    title: "Nuevas regulaciones aduaneras para 2024",
    summary: "Se implementan cambios en los procesos de importación que afectan a productos electrónicos.",
    category: "Regulaciones",
    date: "2024-01-15",
    isNew: true,
  },
  {
    id: 2,
    title: "Aranceles reducidos para productos de hogar",
    summary: "El gobierno anuncia reducción del 15% en aranceles para artículos del hogar.",
    category: "Aranceles",
    date: "2024-01-12",
    isNew: true,
  },
  {
    id: 3,
    title: "China amplía exportaciones de juguetes",
    summary: "Nuevas oportunidades de importación desde Asia con precios competitivos.",
    category: "Oportunidades",
    date: "2024-01-10",
    isNew: false,
  },
  {
    id: 4,
    title: "Tendencias en importación para 2024",
    summary: "Análisis de las categorías de productos más demandadas este año.",
    category: "Tendencias",
    date: "2024-01-08",
    isNew: false,
  },
  {
    id: 5,
    title: "Simplificación de trámites aduaneros",
    summary: "Nueva plataforma digital reduce tiempos de procesamiento en un 40%.",
    category: "Tecnología",
    date: "2024-01-05",
    isNew: false,
  }
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Regulaciones":
      return Globe
    case "Aranceles":
      return TrendingUp
    case "Oportunidades":
      return ExternalLink
    case "Tendencias":
      return TrendingUp
    case "Tecnología":
      return Globe
    default:
      return Newspaper
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Regulaciones":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "Aranceles":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Oportunidades":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Tendencias":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "Tecnología":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function AppSidebar() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-80"} collapsible="icon">
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-lg font-semibold">
            <Newspaper className="h-5 w-5" />
            {!isCollapsed && "Noticias de Importación"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="space-y-3">
              {importNews.map((news) => {
                const CategoryIcon = getCategoryIcon(news.category)
                
                return (
                  <SidebarMenuItem key={news.id}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardHeader className="p-3 pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <CategoryIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            {!isCollapsed && (
                              <div className="min-w-0 flex-1">
                                <Badge 
                                  variant="secondary" 
                                  className={`text-xs ${getCategoryColor(news.category)}`}
                                >
                                  {news.category}
                                </Badge>
                                {news.isNew && (
                                  <Badge variant="destructive" className="ml-1 text-xs">
                                    Nuevo
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {!isCollapsed && (
                          <CardTitle className="text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                            {news.title}
                          </CardTitle>
                        )}
                      </CardHeader>
                      
                      {!isCollapsed && (
                        <CardContent className="p-3 pt-0">
                          <p className="text-xs text-muted-foreground mb-2">
                            {news.summary}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {new Date(news.date).toLocaleDateString('es-ES', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}